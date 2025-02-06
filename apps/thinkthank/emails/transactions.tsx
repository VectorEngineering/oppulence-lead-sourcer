import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react'

import { BusinessConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import { format } from 'date-fns'
import Footer from './components/footer'

type Transaction = {
    id: string
    date: string
    amount: number
    name: string
    currency: string
    category?: string
    description?: string
    status?: string
}

interface TransactionsEmailProps {
    fullName: string
    transactions: Transaction[]
    locale: string
    workspaceName: string
    email?: string
    teamSlug?: string
    companyLogo?: string
    dateRange?: {
        start: string
        end: string
    }
    summary?: {
        totalIncome: number
        totalExpenses: number
        currency: string
    }
}

export default function TransactionsEmail({
    fullName = 'Viktor Hofte',
    transactions = [],
    locale = 'en',
    workspaceName = 'Viktor Hofte AB',
    email = 'user@example.com',
    teamSlug = 'example.com',
    companyLogo = 'https://example.com/logo.png',
    dateRange = {
        start: new Date().toISOString(),
        end: new Date().toISOString()
    },
    summary = {
        totalIncome: 1000,
        totalExpenses: -12593,
        currency: 'USD'
    }
}: TransactionsEmailProps) {
    const firstName = fullName.split(' ')[0]
    const notificationSettingsUrl = `${platform.platformUrl}/${teamSlug}/settings/notifications`
    const transactionUrl = `${platform.platformUrl}/${teamSlug}/transactions`
    const displayedTransactions = transactions.slice(0, 10)
    const hasMoreTransactions = transactions.length > 10

    const formatCurrency = (amount: number, currency: string) => {
        return Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount)
    }

    return (
        <Html>
            <Head />
            <Preview>{`${firstName} - ${transactions.length} transactions`}</Preview>
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
                            {`${firstName} - ${transactions.length} transactions`}
                        </Heading>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
                                        <Row>
                                            <Column className='w-1/2'>
                                                <Text className='m-0 text-sm font-medium text-gray-900'>Transactions Period:</Text>
                                                <Text className='m-0 text-sm text-gray-700'>
                                                    {format(new Date(dateRange.start), 'MMM d')} -{' '}
                                                    {format(new Date(dateRange.end), 'MMM d, yyyy')}
                                                </Text>
                                            </Column>
                                            <Column className='w-1/2'>
                                                <Text className='m-0 text-sm font-medium text-gray-900'>Team:</Text>
                                                <Text className='m-0 text-sm text-gray-700'>{workspaceName}</Text>
                                            </Column>
                                        </Row>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <Section className='mb-8'>
                            <Row>
                                <Column className='px-4'>
                                    <div className='rounded-lg border border-gray-200 bg-gray-50 p-4'>
                                        <Row>
                                            <Column className='w-1/2'>
                                                <div className='flex items-center'>
                                                    <ArrowUpRight className='mr-2 h-4 w-4 text-green-500' />
                                                    <Text className='m-0 text-sm text-gray-900'>
                                                        Income:
                                                        <br />
                                                        <span className='font-medium text-green-600'>
                                                            {formatCurrency(summary.totalIncome, summary.currency)}
                                                        </span>
                                                    </Text>
                                                </div>
                                            </Column>
                                            <Column className='w-1/2'>
                                                <div className='flex items-center'>
                                                    <ArrowDownRight className='mr-2 h-4 w-4 text-red-500' />
                                                    <Text className='m-0 text-sm text-gray-900'>
                                                        Expenses:
                                                        <br />
                                                        <span className='font-medium text-red-600'>
                                                            {formatCurrency(summary.totalExpenses, summary.currency)}
                                                        </span>
                                                    </Text>
                                                </div>
                                            </Column>
                                        </Row>
                                    </div>
                                </Column>
                            </Row>
                        </Section>

                        <table className='w-full min-w-full border-collapse'>
                            <thead>
                                <tr className='h-11 border-b border-t border-gray-200'>
                                    <th align='left' className='py-2'>
                                        <Text className='m-0 text-sm font-semibold'>Date</Text>
                                    </th>
                                    <th align='left' className='py-2' style={{ width: '50%' }}>
                                        <Text className='m-0 text-sm font-semibold'>Description</Text>
                                    </th>
                                    <th align='right' className='py-2'>
                                        <Text className='m-0 text-sm font-semibold'>Amount</Text>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedTransactions.map((transaction) => (
                                    <tr key={transaction.id} className='h-11 border-b border-gray-200'>
                                        <td className='py-2'>
                                            <Text className='m-0 text-sm'>{format(new Date(transaction.date), 'MMM d')}</Text>
                                        </td>
                                        <td className='py-2'>
                                            <Link
                                                href={`${transactionUrl}/${transaction.id}`}
                                                className={`text-sm no-underline ${
                                                    transaction?.category === 'income' ? 'text-green-600' : 'text-gray-900'
                                                }`}
                                            >
                                                {transaction.name}
                                            </Link>
                                        </td>
                                        <td align='right' className='py-2'>
                                            <Text
                                                className={`m-0 text-sm ${
                                                    transaction?.category === 'income' ? 'text-green-600' : 'text-gray-900'
                                                }`}
                                            >
                                                {formatCurrency(transaction.amount, transaction.currency)}
                                            </Text>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {hasMoreTransactions && (
                            <Text className='mt-4 text-center text-sm text-gray-500'>
                                {`${transactions.length - 10} more transactions`}
                            </Text>
                        )}

                        <Section className='my-8 text-center'>
                            <Link
                                className='rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline'
                                href={`${transactionUrl}?start=${dateRange.start}&end=${dateRange.end}`}
                            >
                                View all transactions
                            </Link>
                        </Section>

                        <Text className='text-sm text-gray-600'>{`${firstName} - ${transactions.length} transactions`}</Text>

                        <Hr className='my-6 w-full border border-gray-200' />

                        <Footer email={email} notificationSettingsUrl={notificationSettingsUrl} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
