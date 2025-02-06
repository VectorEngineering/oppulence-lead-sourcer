import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { Building, Calendar, CreditCard, DollarSign, FileText } from 'lucide-react'

import { BusinessConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

interface InvoiceEmailProps {
    customerName: string
    teamName: string
    link: string
    email?: string
    teamSlug: string
    companyLogo?: string
    invoiceNumber?: string
    invoiceAmount?: string
    dueDate?: string
    paymentMethods?: string[]
    contactEmail?: string
    currency?: string
    description?: string
    terms?: string
}

export default function InvoiceEmail({
    customerName = 'Acme Inc',
    teamName = 'Solomon AI',
    link = 'https://app.example.com/invoices/1234567890',
    email = 'billing@example.com',
    teamSlug,
    companyLogo = 'https://example.com/logo.png',
    invoiceNumber = 'INV-0001',
    invoiceAmount = '$1,234.56',
    dueDate = 'April 1, 2024',
    paymentMethods = ['Bank Transfer', 'Credit Card', 'PayPal'],
    contactEmail = 'support@example.com',
    currency = 'USD',
    description = 'Monthly Services - March 2024',
    terms = 'Payment due within 30 days'
}: InvoiceEmailProps) {
    const notificationSettingsUrl = `${platform.platformUrl}/${teamSlug}/settings/notifications`

    return (
        <Html>
            <Head />
            <Preview>
                New Invoice #{invoiceNumber} from {teamName} for {invoiceAmount}
            </Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5'>
                        <Section className='mt-8 text-center'>
                            {companyLogo && <Img src={companyLogo} width='40' height='40' alt='Company Logo' className='mx-auto mb-4' />}
                            <Row>
                                <Column align='center'>
                                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100'>
                                        <FileText className='h-6 w-6 text-blue-600' />
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Heading className='mx-0 my-7 p-0 text-center text-xl font-semibold text-black'>
                            New Invoice from {teamName}
                        </Heading>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
                                        <Text className='m-0 text-sm text-gray-900'>
                                            <strong>Dear {customerName},</strong>
                                            <br />
                                            <br />A new invoice has been issued for your account. Please review the details below and
                                            process the payment before the due date.
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
                                                    <Text className='m-0 text-sm text-gray-700'>Due Date: {dueDate}</Text>
                                                </Column>
                                            </Row>
                                            <Row>
                                                <Column className='w-5'>
                                                    <Building className='h-4 w-4 text-gray-500' />
                                                </Column>
                                                <Column>
                                                    <Text className='m-0 text-sm text-gray-700'>Billed To: {customerName}</Text>
                                                </Column>
                                            </Row>
                                            {description && (
                                                <Text className='m-0 mt-2 text-sm text-gray-700'>Description: {description}</Text>
                                            )}
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-gray-200 bg-white p-4'>
                                        <Text className='m-0 text-sm font-medium text-gray-900'>Payment Options:</Text>
                                        <div className='mt-2'>
                                            {paymentMethods.map((method, index) => (
                                                <Row key={method}>
                                                    <Column className='w-5'>
                                                        <CreditCard className='h-4 w-4 text-gray-500' />
                                                    </Column>
                                                    <Column>
                                                        <Text className='m-0 text-sm text-gray-700'>{method}</Text>
                                                    </Column>
                                                </Row>
                                            ))}
                                        </div>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='my-8 text-center'>
                            <Link
                                className='rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline'
                                href={link}
                            >
                                View and Pay Invoice
                            </Link>
                        </Section>

                        {terms && <Text className='text-center text-xs leading-6 text-gray-500'>{terms}</Text>}

                        <Text className='text-sm leading-6 text-gray-600'>
                            For any questions about this invoice or the payment process, please contact us at{' '}
                            <Link href={`mailto:${contactEmail}`} className='text-blue-600'>
                                {contactEmail}
                            </Link>
                            .
                        </Text>

                        <Hr className='my-6 w-full border border-gray-200' />

                        <Footer email={email} notificationSettingsUrl={notificationSettingsUrl} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
