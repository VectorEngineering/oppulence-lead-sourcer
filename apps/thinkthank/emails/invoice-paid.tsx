import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { Calendar, CheckCircle, CreditCard, DollarSign, FileText } from 'lucide-react'

import { BusinessConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

interface InvoicePaidEmailProps {
    customerName: string
    teamName: string
    link: string
    email?: string
    teamSlug: string
    companyLogo?: string
    invoiceNumber?: string
    invoiceAmount?: string
    paymentDate?: string
    paymentMethod?: string
    transactionId?: string
    currency?: string
    description?: string
    contactEmail?: string
}

export default function InvoicePaidEmail({
    customerName = 'Acme Inc',
    teamName = 'Solomon AI',
    link = 'https://app.example.com/invoices/1234567890',
    email = 'billing@example.com',
    teamSlug,
    companyLogo = 'https://example.com/logo.png',
    invoiceNumber = 'INV-0001',
    invoiceAmount = '$1,234.56',
    paymentDate = 'March 18, 2024',
    paymentMethod = 'Bank Transfer',
    transactionId = 'TRX-123456',
    currency = 'USD',
    description = 'Monthly Services - March 2024',
    contactEmail = 'support@example.com'
}: InvoicePaidEmailProps) {
    const notificationSettingsUrl = `${platform.platformUrl}/${teamSlug}/settings/notifications`

    return (
        <Html>
            <Head />
            <Preview>
                Payment Received: Invoice {invoiceNumber} has been paid by {customerName}
            </Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5'>
                        <Section className='mt-8 text-center'>
                            {companyLogo && <Img src={companyLogo} width='40' height='40' alt='Company Logo' className='mx-auto mb-4' />}
                            <Row>
                                <Column align='center'>
                                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100'>
                                        <CheckCircle className='h-6 w-6 text-green-600' />
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Heading className='mx-0 my-7 p-0 text-center text-xl font-semibold text-black'>Payment Received</Heading>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-green-200 bg-green-50 p-4'>
                                        <Text className='m-0 text-sm text-gray-900'>
                                            <strong>Dear {customerName},</strong>
                                            <br />
                                            <br />
                                            Great news! We've received payment for invoice <strong>{invoiceNumber}</strong>. The payment has
                                            been matched and recorded in your account.
                                        </Text>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-gray-200 bg-gray-50 p-4'>
                                        <Text className='m-0 text-sm font-medium text-gray-900'>Payment Details:</Text>
                                        <div className='mt-2 space-y-2'>
                                            <Row>
                                                <Column className='w-5'>
                                                    <FileText className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Invoice Number: {invoiceNumber}</Text>
                                                </Column>
                                            </Row>
                                            <Row>
                                                <Column className='w-5'>
                                                    <DollarSign className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>
                                                        Amount: {invoiceAmount} {currency}
                                                    </Text>
                                                </Column>
                                            </Row>
                                            <Row>
                                                <Column className='w-5'>
                                                    <Calendar className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Payment Date: {paymentDate}</Text>
                                                </Column>
                                            </Row>
                                            <Row>
                                                <Column className='w-5'>
                                                    <CreditCard className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Payment Method: {paymentMethod}</Text>
                                                </Column>
                                            </Row>
                                            {description && (
                                                <Text className='m-0 mt-2 text-sm text-gray-700'>
                                                    Description: {description}
                                                    <br />
                                                    Transaction ID: {transactionId}
                                                </Text>
                                            )}
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Text className='text-sm leading-6 text-gray-600'>
                            The invoice has been automatically linked to the transaction in your records. For any questions about this
                            payment or invoice, please contact us at{' '}
                            <Link href={`mailto:${contactEmail}`} className='text-blue-600'>
                                {contactEmail}
                            </Link>
                            .
                        </Text>

                        <Section className='my-8 text-center'>
                            <Link
                                className='rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline'
                                href={link}
                            >
                                View Invoice Details
                            </Link>
                        </Section>

                        <Section>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-blue-100 bg-blue-50 p-4'>
                                        <Text className='m-0 text-sm text-blue-900'>
                                            💡 Tip: You can customize your payment notifications and auto-matching settings in your account
                                            preferences.
                                        </Text>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className='my-6 w-full border border-gray-200' />

                        <Footer email={email} notificationSettingsUrl={notificationSettingsUrl} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
