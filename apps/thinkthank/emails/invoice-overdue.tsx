import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { AlertTriangle, Calendar, DollarSign, Send } from 'lucide-react'

import { BusinessConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

interface InvoiceOverdueEmailProps {
    customerName: string
    invoiceNumber: string
    link: string
    email?: string
    teamSlug: string
    companyLogo?: string
    invoiceAmount?: string
    dueDate?: string
    daysOverdue?: number
    paymentMethods?: string[]
}

export default function InvoiceOverdueEmail({
    customerName = 'Customer',
    invoiceNumber = 'INV-0001',
    link = 'https://app.example.com/invoices/1234567890',
    email = 'user@example.com',
    teamSlug,
    companyLogo = 'https://example.com/logo.png',
    invoiceAmount = '$1,234.56',
    dueDate = 'March 1, 2024',
    daysOverdue = 5,
    paymentMethods = ['Bank Transfer', 'Credit Card', 'PayPal']
}: InvoiceOverdueEmailProps) {
    const notificationSettingsUrl = `${platform.platformUrl}/${teamSlug}/settings/notifications`

    return (
        <Html>
            <Head />
            <Preview>
                Important: Invoice {invoiceNumber} for {customerName} is {daysOverdue.toString()} days overdue
            </Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5'>
                        <Section className='mt-8 text-center'>
                            {companyLogo && <Img src={companyLogo} width='40' height='40' alt='Company Logo' className='mx-auto mb-4' />}
                            <Row>
                                <Column align='center'>
                                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
                                        <AlertTriangle className='h-6 w-6 text-red-600' />
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Heading className='mx-0 my-7 p-0 text-center text-xl font-semibold text-black'>
                            Invoice {invoiceNumber} is Overdue
                        </Heading>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-red-200 bg-red-50 p-4'>
                                        <Text className='m-0 text-sm text-gray-900'>
                                            Invoice <strong>{invoiceNumber}</strong> to <strong>{customerName}</strong> is now{' '}
                                            <strong>{daysOverdue} days overdue</strong>. We've checked your account but haven't found a
                                            matching transaction.
                                        </Text>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-gray-200 bg-gray-50 p-4'>
                                        <Text className='m-0 text-sm font-medium text-gray-900'>Invoice Details:</Text>
                                        <div className='mt-2 space-y-2'>
                                            <Row>
                                                <Column className='w-5'>
                                                    <DollarSign className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Amount: {invoiceAmount}</Text>
                                                </Column>
                                            </Row>
                                            <Row>
                                                <Column className='w-5'>
                                                    <Calendar className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Due Date: {dueDate}</Text>
                                                </Column>
                                            </Row>
                                            {paymentMethods && (
                                                <Text className='m-0 mt-2 text-sm text-gray-700'>
                                                    Accepted Payment Methods: {paymentMethods.join(', ')}
                                                </Text>
                                            )}
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Text className='text-sm leading-6 text-gray-700'>Available actions:</Text>

                        <Section className='my-4'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='space-y-3'>
                                        <Link
                                            className='block rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 no-underline transition-colors hover:bg-gray-50'
                                            href={`${link}/verify-payment`}
                                        >
                                            ✓ Verify or record payment manually
                                        </Link>
                                        <Link
                                            className='block rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700 no-underline transition-colors hover:bg-gray-50'
                                            href={`${link}/send-reminder`}
                                        >
                                            <Row>
                                                <Column className='w-5'>
                                                    <Send className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>Send payment reminder to {customerName}</Column>
                                            </Row>
                                        </Link>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='my-8 text-center'>
                            <Link
                                className='rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline'
                                href={link}
                            >
                                View Full Invoice Details
                            </Link>
                        </Section>

                        <Text className='text-sm leading-6 text-gray-600'>
                            Need assistance? Our support team is here to help - just reply to this email.
                        </Text>

                        <Hr className='my-6 w-full border border-gray-200' />

                        <Footer email={email} notificationSettingsUrl={notificationSettingsUrl} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
