import { DUB_WORDMARK, capitalize, currencyFormatter, formatDate } from '@dub/utils'
import { Document, Image, Link, Page, Text, View, renderToBuffer } from '@react-pdf/renderer'

import { DubApiError } from '@/lib/api/errors'
import { withSession } from '@/lib/auth'
import { stripe } from '@/lib/stripe'
import { BusinessConfig as platform } from '@dub/platform-config'
import { prisma } from '@dub/prisma-thinkthank'
import { createTw } from 'react-pdf-tailwind'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'

const tw = createTw({
    theme: {
        fontFamily: {
            // sans: ["Times-Bold"],
        }
    }
})

export const GET = withSession(async ({ session, params }) => {
    const { invoiceId } = params

    const invoice = await prisma.invoice.findUniqueOrThrow({
        where: {
            id: invoiceId
        },
        select: {
            id: true,
            amount: true,
            fee: true,
            total: true,
            status: true,
            number: true,
            createdAt: true,
            payouts: {
                select: {
                    periodStart: true,
                    periodEnd: true,
                    type: true,
                    amount: true,
                    partner: {
                        select: {
                            name: true,
                            image: true
                        }
                    }
                }
            },
            workspace: {
                select: {
                    id: true,
                    name: true,
                    stripeId: true
                }
            }
        }
    })

    const userInWorkspace = await prisma.projectUsers.findUnique({
        where: {
            userId_projectId: {
                userId: session.user.id,
                projectId: invoice.workspace.id
            }
        }
    })

    if (!userInWorkspace) {
        throw new DubApiError({
            code: 'unauthorized',
            message: 'You are not authorized to view this invoice'
        })
    }

    let customer: Stripe.Customer | null = null

    if (invoice.workspace.stripeId) {
        try {
            customer = (await stripe.customers.retrieve(invoice.workspace.stripeId!)) as Stripe.Customer
        } catch (error) {
            console.error(error)
        }
    }

    const invoiceMetadata = [
        {
            label: 'Invoice number',
            value: `#${invoice.number}`
        },
        {
            label: 'Date',
            value: invoice.createdAt.toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric'
            })
        }
    ]

    const invoiceSummaryDetails = [
        {
            label: 'Amount',
            value: currencyFormatter(invoice.amount / 100, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        },
        {
            label: 'Fees',
            value: currencyFormatter(invoice.fee / 100, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        },
        {
            label: 'Total',
            value: currencyFormatter(invoice.total / 100, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })
        }
    ]

    const addresses = [
        {
            title: 'From',
            address: {
                name: `${platform.company}, Inc.`,
                line1: `${platform.address.street}`,
                city: platform.address.city,
                state: platform.address.state,
                postalCode: platform.address.zipCode,
                email: platform.email.from.default
            }
        },
        {
            title: 'Bill to',
            address: {
                companyName: invoice.workspace.name,
                name: customer?.shipping?.name,
                line1: customer?.shipping?.address?.line1,
                line2: customer?.shipping?.address?.line2,
                city: customer?.shipping?.address?.city,
                state: customer?.shipping?.address?.state,
                postalCode: customer?.shipping?.address?.postal_code,
                email: customer?.email
            }
        }
    ]

    const pdf = await renderToBuffer(
        <Document>
            <Page size='A4' style={tw('p-20 bg-white')}>
                <View style={tw('flex-row justify-between items-center mb-10')}>
                    <Image src={DUB_WORDMARK} style={tw('w-20 h-10')} />
                    <View style={tw('text-right w-1/2')}>
                        <Text style={tw('text-sm font-medium text-neutral-800')}>{platform.company} Inc.</Text>
                        <Text style={tw('text-sm text-neutral-500 ')}>{platform.email.from.default}</Text>
                    </View>
                </View>

                <View style={tw('flex-col gap-2 text-sm font-medium mb-10')}>
                    {invoiceMetadata.map((row) => (
                        <View style={tw('flex-row')} key={row.label}>
                            <Text style={tw('text-neutral-500 w-1/5')}>{row.label}</Text>
                            <Text style={tw('text-neutral-800 w-4/5')}>{row.value}</Text>
                        </View>
                    ))}
                </View>

                <View style={tw('flex-row justify-between mb-10 ')}>
                    {addresses.map(({ title, address }, index) => {
                        const cityStatePostal = [address.city, address.state, address.postalCode].filter(Boolean).join(', ')

                        const records = [
                            address.companyName,
                            address.name,
                            address.line1,
                            address.line2,
                            cityStatePostal,
                            address.email
                        ].filter((record) => record && record.length > 0)

                        return (
                            <View style={tw('w-1/2')} key={index}>
                                <Text style={tw('text-sm font-medium text-neutral-800 leading-6 mb-2')}>{title}</Text>
                                {records.map((record, index) => (
                                    <Text style={tw('font-normal text-sm text-neutral-500 leading-6')} key={index}>
                                        {record}
                                    </Text>
                                ))}
                            </View>
                        )
                    })}
                </View>

                <View style={tw('flex-row justify-between border border-neutral-200 rounded-xl mb-6')}>
                    <View style={tw('flex-col gap-2 w-1/2 p-4')}>
                        <Text style={tw('text-neutral-500 font-normal text-sm')}>Payouts</Text>
                        <Text style={tw('text-neutral-800 font-medium text-[16px]')}>{invoice.payouts.length}</Text>
                    </View>

                    <View style={tw('flex-col items-start gap-2 border-l border-neutral-200 w-1/2 p-4')}>
                        <Text style={tw('text-neutral-500 font-normal text-sm')}>Total</Text>
                        <Text style={tw('text-neutral-800 font-medium text-[16px]')}>
                            {currencyFormatter(invoice.total / 100, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </Text>
                    </View>
                </View>

                <View style={tw('mb-6 border border-neutral-200 rounded-xl')}>
                    <View style={tw('flex-row border-neutral-200 border-b')}>
                        <Text style={tw('w-2/6 p-3.5 text-sm font-medium text-neutral-700')}>Partner</Text>
                        <Text style={tw('w-2/6 p-3.5 text-sm font-medium text-neutral-700')}>Period</Text>
                        <Text style={tw('w-1/6 p-3.5 text-sm font-medium text-neutral-700')}>Type</Text>
                        <Text style={tw('w-1/6 p-3.5 text-sm font-medium text-neutral-700')}>Amount</Text>
                    </View>

                    {invoice.payouts.map((payout, index) => (
                        <View
                            key={index}
                            style={tw(
                                `flex-row text-sm font-medium text-neutral-700 border-neutral-200 items-center ${index + 1 === invoice.payouts.length ? '' : 'border-b'}`
                            )}
                        >
                            <View style={tw('flex-row items-center gap-2 w-2/6 p-3.5')}>
                                <Image src={payout.partner.image!} style={tw('w-5 h-5 rounded-full')} />
                                <Text>{payout.partner.name}</Text>
                            </View>
                            <Text style={tw('w-2/6 p-3.5')}>
                                {formatDate(payout.periodStart!, {
                                    month: 'short',
                                    year:
                                        new Date(payout.periodStart!).getFullYear() === new Date(payout.periodEnd!).getFullYear()
                                            ? undefined
                                            : 'numeric'
                                })}
                                -{formatDate(payout.periodEnd!, { month: 'short' })}
                            </Text>
                            <Text style={tw('w-1/6 p-3.5')}>{capitalize(payout.type)}</Text>
                            <Text style={tw('w-1/6 p-3.5')}>
                                {currencyFormatter(payout.amount / 100, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={tw('flex-col gap-2 mb-10 p-4 border border-neutral-100 rounded-xl bg-neutral-50')}>
                    {invoiceSummaryDetails.map((row) => (
                        <View style={tw('flex-row')} key={row.label}>
                            <Text style={tw('text-neutral-500 text-sm font-medium w-2/5')}>{row.label}</Text>
                            <Text style={tw('text-neutral-800 text-sm font-medium w-3/5')}>{row.value}</Text>
                        </View>
                    ))}
                </View>

                <Text style={tw('text-sm text-neutral-600 mt-6')}>
                    If you have any questions, visit our support site at{' '}
                    <Link href={`${platform.webUrl}/help`} style={tw('text-neutral-900')}>
                        {platform.webUrl}/help
                    </Link>{' '}
                    or contact us at{' '}
                    <Link href={platform.email.from.default} style={tw('text-neutral-900')}>
                        {platform.email.from.default}
                    </Link>
                </Text>
            </Page>
        </Document>
    )

    return new Response(pdf, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `inline; filename="Invoice-${invoice.number}.pdf"`
        }
    })
})
