import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

import { OppulenceConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

export default function WorkspaceLeadsSummary({
  email = 'panic@thedis.co',
  workspace = {
    name: 'Sales Team',
    slug: 'sales',
    logo: platform.assets.logo,
  },
  summary = {
    period: 'Last 30 Days',
    overview: {
      totalLeads: 150,
      newLeads: 45,
      qualifiedLeads: 28,
      avgScore: 72,
      conversionRate: '18.6%',
    },
    sources: [
      { name: 'Website Form', count: 65, percentage: '43%' },
      { name: 'LinkedIn', count: 45, percentage: '30%' },
      { name: 'Referrals', count: 25, percentage: '17%' },
      { name: 'Other', count: 15, percentage: '10%' },
    ],
    topPerforming: [
      {
        name: 'Enterprise Solutions Lead',
        company: 'Tech Corp',
        score: 95,
        status: 'Sales Qualified',
        owner: 'Sarah Johnson',
      },
      {
        name: 'API Integration Prospect',
        company: 'Data Systems Inc',
        score: 88,
        status: 'Meeting Scheduled',
        owner: 'Mike Chen',
      },
    ],
    trends: {
      leadGrowth: '+15%',
      qualificationRate: '+8%',
      avgEngagement: '+12%',
      responseTime: '-25%',
    },
    insights: [
      'Enterprise segment shows highest conversion rate',
      'Technical leads have higher engagement scores',
      'LinkedIn leads convert 2x better than average',
      'Follow-up within 1 hour improves qualification by 40%',
    ],
  },
}: {
  email: string
  workspace: {
    name: string
    slug: string
    logo?: string | null
  }
  summary: {
    period: string
    overview: {
      totalLeads: number
      newLeads: number
      qualifiedLeads: number
      avgScore: number
      conversionRate: string
    }
    sources: Array<{
      name: string
      count: number
      percentage: string
    }>
    topPerforming: Array<{
      name: string
      company: string
      score: number
      status: string
      owner: string
    }>
    trends: {
      leadGrowth: string
      qualificationRate: string
      avgEngagement: string
      responseTime: string
    }
    insights: string[]
  }
}) {
  const stats = {
    'Total Leads': summary.overview.totalLeads.toString(),
    'New Leads': summary.overview.newLeads.toString(),
    Qualified: summary.overview.qualifiedLeads.toString(),
    'Avg Score': summary.overview.avgScore.toString(),
  }

  const trends = {
    'Lead Growth': summary.trends.leadGrowth,
    Qualification: summary.trends.qualificationRate,
    Engagement: summary.trends.avgEngagement,
  }

  return (
    <Html>
      <Head />
      <Preview>
        Workspace Leads Summary: {summary.period} - {summary.overview.totalLeads.toString()} total
        leads, {summary.overview.qualifiedLeads.toString()} qualified
      </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src={platform.assets.wordmark}
                height="32"
                alt={platform.company}
                className="my-0"
              />
            </Section>
            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Workspace Leads Summary 📊
            </Heading>
            <Text className="text-sm leading-6 text-black">
              Here's a comprehensive overview of your workspace's lead performance for{' '}
              {summary.period}. The data shows strong acquisition and qualification metrics, with
              several notable trends and insights.
            </Text>

            <Section className="my-8 rounded-lg border border-solid border-gray-200 p-2">
              <div>
                <Img
                  src={`${platform.assetsUrl}/header.png`}
                  alt="header"
                  className="max-w-[500px] rounded-lg"
                />
                <div className="-mt-[90px] mb-[30px] text-center">
                  {workspace.logo && (
                    <Img
                      src={workspace.logo}
                      height="36"
                      alt={workspace.name}
                      className="mx-auto rounded-lg"
                    />
                  )}
                  <Text className="mt-1 text-xl font-semibold">{workspace.name}</Text>
                </div>
              </div>
              <Row className="w-full px-4 py-2">
                {Object.entries(stats).map(([key, value]) => (
                  <StatCard key={key} title={key} value={value} />
                ))}
              </Row>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Growth Trends 📈
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Your workspace shows positive momentum across key metrics. These trends indicate
              effective lead generation and qualification processes.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Row className="w-full">
                  {Object.entries(trends).map(([key, value]) => (
                    <Column key={key} className="px-2 text-center">
                      <Text className="m-0 text-sm font-medium text-gray-500">{key}</Text>
                      <Text className="m-0 text-base font-medium text-green-600">{value}</Text>
                    </Column>
                  ))}
                </Row>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Lead Sources 🎯
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Understanding your most effective lead sources helps optimize acquisition strategies
              and resource allocation.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {summary.sources.map((source, index) => (
                  <div
                    key={`${index}-${source.name}-${Math.random()}`}
                    className={index !== 0 ? 'mt-4' : ''}
                  >
                    <Row>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Source</Text>
                        <Text className="m-0 text-base font-medium">{source.name}</Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Count</Text>
                        <Text className="m-0 text-base font-medium">{source.count}</Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Share</Text>
                        <Text className="m-0 text-base font-medium">{source.percentage}</Text>
                      </Column>
                    </Row>
                    {index !== summary.sources.length - 1 && (
                      <Hr className="my-4 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Top Performing Leads 🏆
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              These high-potential leads demonstrate strong engagement and match ideal customer
              profiles. Priority follow-up is recommended.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {summary.topPerforming.map((lead, index) => (
                  <div
                    key={`${index}-${lead.name}-${Math.random()}`}
                    className={index !== 0 ? 'mt-4' : ''}
                  >
                    <Row>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Lead</Text>
                        <Text className="m-0 text-base font-medium">{lead.name}</Text>
                        <Text className="m-0 text-sm text-gray-500">{lead.company}</Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Score</Text>
                        <Text className="m-0 text-base font-medium text-green-600">
                          {lead.score}
                        </Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Owner</Text>
                        <Text className="m-0 text-base font-medium">{lead.owner}</Text>
                      </Column>
                    </Row>
                    {index !== summary.topPerforming.length - 1 && (
                      <Hr className="my-4 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Key Insights 💡
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Analysis of your lead data reveals valuable insights that can help optimize your lead
              generation and conversion strategies.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {summary.insights.map((insight, index) => (
                  <Text key={`${index}-${insight}-${Math.random()}`} className="m-0 mb-2 text-sm">
                    {index + 1}. {insight}
                  </Text>
                ))}
              </div>
            </Section>

            <Text className="mb-4 mt-8 text-sm leading-6 text-black">
              Your workspace shows strong lead generation and qualification performance. Focus on
              the identified insights and maintain proactive engagement to drive continued growth.
            </Text>

            <Section className="mb-8 mt-8 text-center">
              <Link
                className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`${platform.platformUrl}/${workspace.slug}/leads`}
              >
                View All Leads
              </Link>
            </Section>
            <Footer email={email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const StatCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <Column className="text-center">
      <Text className="font-medium text-gray-400">{title}</Text>
      <Text className="-mt-3 text-lg font-medium text-black">{value}</Text>
    </Column>
  )
}
