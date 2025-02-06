import { Body, Column, Container, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components'

import { BusinessConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

export default function LeadActivitySummary({
    email = 'panic@thedis.co',
    workspace = {
        name: 'Sales Team',
        slug: 'sales',
        logo: platform.assets.logo
    },
    lead = {
        name: 'John Smith',
        company: 'Acme Corp',
        email: 'john@acme.co',
        score: 85,
        previousScore: 75,
        activities: [
            {
                type: 'Page Visit',
                detail: 'Pricing Page',
                timestamp: '2 hours ago',
                duration: '5 minutes'
            },
            {
                type: 'Content Download',
                detail: 'Enterprise Whitepaper',
                timestamp: 'Yesterday',
                duration: 'N/A'
            },
            {
                type: 'Email Interaction',
                detail: 'Opened Product Update',
                timestamp: '2 days ago',
                duration: '3 minutes'
            }
        ],
        trends: {
            engagement: 'Increasing',
            frequency: '2x more active',
            interest: 'High intent signals'
        }
    }
}: {
    email: string
    workspace: {
        name: string
        slug: string
        logo?: string | null
    }
    lead: {
        name: string
        company: string
        email: string
        score: number
        previousScore: number
        activities: Array<{
            type: string
            detail: string
            timestamp: string
            duration: string
        }>
        trends: {
            engagement: string
            frequency: string
            interest: string
        }
    }
}) {
    const scoreChange = lead.score - lead.previousScore
    const isPositive = scoreChange >= 0

    const stats = {
        'Current Score': lead.score.toString(),
        'Score Change': `${isPositive ? '+' : ''}${scoreChange}`,
        Activities: `${lead.activities.length} recent`,
        Engagement: lead.trends.engagement
    }

    return (
        <Html>
            <Head />
            <Preview>
                Lead Activity Summary: {lead.name} from {lead.company} - {lead.trends.engagement} engagement
            </Preview>
            <Tailwind>
                <Body className='mx-auto my-auto bg-white font-sans'>
                    <Container className='mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5'>
                        <Section className='mt-8'>
                            <Img src={platform.assets.wordmark} height='32' alt={platform.company} className='my-0' />
                        </Section>
                        <Heading className='mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black'>Lead Activity Summary 📊</Heading>
                        <Text className='text-sm leading-6 text-black'>
                            We've compiled a comprehensive overview of recent lead activities and engagement patterns. This summary provides
                            valuable insights into the lead's interests, behavior, and potential sales readiness, helping you make informed
                            decisions about next steps.
                        </Text>

                        <Section className='my-8 rounded-lg border border-solid border-gray-200 p-2'>
                            <div>
                                <Img src={`${platform.assetsUrl}/header.png`} alt='header' className='max-w-[500px] rounded-lg' />
                                <div className='-mt-[90px] mb-[30px] text-center'>
                                    {workspace.logo && (
                                        <Img src={workspace.logo} height='36' alt={workspace.name} className='mx-auto rounded-lg' />
                                    )}
                                    <Text className='mt-1 text-xl font-semibold'>{workspace.name}</Text>
                                </div>
                            </div>
                            <Row className='w-full px-4 py-2'>
                                {Object.entries(stats).map(([key, value]) => (
                                    <StatCard key={key} title={key} value={value} isScore={key.includes('Score')} isPositive={isPositive} />
                                ))}
                            </Row>
                        </Section>

                        <Heading className='mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black'>Lead Profile 👤</Heading>
                        <Text className='mb-4 text-sm leading-6 text-black'>
                            Understanding the lead's context is crucial for meaningful engagement. This profile provides key information
                            about their role and organization, helping you tailor your approach to their specific needs and industry
                            challenges.
                        </Text>
                        <Section className='my-4'>
                            <div className='rounded-lg border border-solid border-gray-200 p-4'>
                                <Row>
                                    <Column className='px-2'>
                                        <Text className='m-0 text-sm font-medium text-gray-500'>Name</Text>
                                        <Text className='m-0 text-lg font-bold'>{lead.name}</Text>
                                    </Column>
                                    <Column className='px-2'>
                                        <Text className='m-0 text-sm font-medium text-gray-500'>Company</Text>
                                        <Text className='m-0 text-lg font-bold'>{lead.company}</Text>
                                    </Column>
                                </Row>
                                <Hr className='my-4 border-gray-200' />
                                <Text className='m-0 text-center text-sm font-medium text-gray-500'>Email Address</Text>
                                <Text className='m-0 text-center text-lg font-bold'>{lead.email}</Text>
                            </div>
                        </Section>

                        <Heading className='mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black'>Recent Activities 📈</Heading>
                        <Text className='mb-4 text-sm leading-6 text-black'>
                            Below is a chronological timeline of the lead's interactions with our platform. Each activity provides insights
                            into their interests and engagement level, helping you understand their journey and potential needs.
                        </Text>
                        <Section className='my-4'>
                            <div className='rounded-lg border border-solid border-gray-200 p-4'>
                                {lead.activities.map((activity, index) => (
                                    <div key={`${index}-${activity.type}-${Math.random()}`} className={index !== 0 ? 'mt-4' : ''}>
                                        <Row>
                                            <Column className='px-2'>
                                                <Text className='m-0 text-sm font-medium text-gray-500'>{activity.type}</Text>
                                                <Text className='m-0 text-base font-medium'>{activity.detail}</Text>
                                            </Column>
                                            <Column className='px-2 text-right'>
                                                <Text className='m-0 text-sm text-gray-500'>{activity.timestamp}</Text>
                                                <Text className='m-0 text-sm'>{activity.duration}</Text>
                                            </Column>
                                        </Row>
                                        {index !== lead.activities.length - 1 && <Hr className='my-4 border-gray-200' />}
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Heading className='mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black'>Engagement Trends 📊</Heading>
                        <Text className='mb-4 text-sm leading-6 text-black'>
                            Analysis of the lead's engagement patterns reveals important trends in their behavior. These insights can help
                            predict future actions and identify the best moments for meaningful outreach and conversation.
                        </Text>
                        <Section className='my-4'>
                            <div className='rounded-lg border border-solid border-gray-200 p-4'>
                                <Row>
                                    {Object.entries(lead.trends).map(([key, value], index) => (
                                        <Column key={key} className='px-2'>
                                            <Text className='m-0 text-sm font-medium text-gray-500'>
                                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                            </Text>
                                            <Text className='m-0 text-base font-medium'>{value}</Text>
                                        </Column>
                                    ))}
                                </Row>
                            </div>
                        </Section>

                        <Text className='mb-4 mt-8 text-sm leading-6 text-black'>
                            Monitor these activities closely to identify optimal engagement opportunities. Regular review of engagement
                            patterns will help you maintain momentum and ensure timely, relevant interactions with this lead.
                        </Text>

                        <Section className='mb-8 mt-8 text-center'>
                            <Link
                                className='rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline'
                                href={`${platform.platformUrl}/${workspace.slug}/leads`}
                            >
                                View Lead Details
                            </Link>
                        </Section>
                        <Footer email={email} />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

const StatCard = ({
    title,
    value,
    isScore = false,
    isPositive = true
}: {
    title: string
    value: string
    isScore?: boolean
    isPositive?: boolean
}) => {
    const textColor = isScore ? (isPositive ? 'text-green-600' : 'text-red-600') : 'text-black'

    return (
        <Column className='text-center'>
            <Text className='font-medium text-gray-400'>{title}</Text>
            <Text className={`-mt-3 text-lg font-medium ${textColor}`}>{value}</Text>
        </Column>
    )
}
