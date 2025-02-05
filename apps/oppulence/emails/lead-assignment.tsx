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

export default function LeadAssignment({
  email = 'panic@thedis.co',
  workspace = {
    name: 'Sales Team',
    slug: 'sales',
    logo: platform.assets.logo,
  },
  lead = {
    name: 'John Smith',
    company: 'Acme Corp',
    email: 'john@acme.co',
    score: 85,
    source: 'Website Contact Form',
    interest: 'Enterprise Plan',
    assignedTo: 'Jane Doe',
    assignedBy: 'Alex Manager',
    priority: 'High',
    notes: 'Immediate follow-up required - showed strong interest in enterprise features',
    timeline: 'Follow up within 24 hours',
    industry: 'Technology',
  },
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
    source: string
    interest: string
    assignedTo: string
    assignedBy: string
    priority: string
    notes: string
    timeline: string
    industry: string
  }
}) {
  const stats = {
    'Lead Score': lead.score.toString(),
    Priority: lead.priority,
    Source: lead.source,
    Interest: lead.interest,
  }

  const assignmentDetails = {
    'Assigned To': lead.assignedTo,
    'Assigned By': lead.assignedBy,
    Timeline: lead.timeline,
  }

  const suggestedActions = [
    'Review lead profile and history',
    'Schedule initial discovery call',
    'Prepare personalized pitch deck',
    'Set up lead tracking alerts',
  ]

  return (
    <Html>
      <Head />
      <Preview>
        New Lead Assignment: {lead.name} from {lead.company} assigned to {lead.assignedTo}
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
              New Lead Assignment 🎯
            </Heading>
            <Text className="text-sm leading-6 text-black">
              A high-potential lead has been assigned to your pipeline. Based on their initial
              engagement and profile, this opportunity requires prompt attention. The lead has shown
              significant interest in our enterprise solutions and matches our ideal customer
              profile.
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
                  <StatCard
                    key={key}
                    title={key}
                    value={value}
                    isScore={key === 'Lead Score'}
                    isHighlight={key === 'Priority' && value === 'High'}
                  />
                ))}
              </Row>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Lead Profile 👤
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Below are the key details about your newly assigned lead. They represent{' '}
              {lead.company}, a company in the {lead.industry} sector, and have demonstrated strong
              interest through their recent interactions with our platform.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Row>
                  <Column className="px-2">
                    <Text className="m-0 text-sm font-medium text-gray-500">Name</Text>
                    <Text className="m-0 text-lg font-bold">{lead.name}</Text>
                  </Column>
                  <Column className="px-2">
                    <Text className="m-0 text-sm font-medium text-gray-500">Company</Text>
                    <Text className="m-0 text-lg font-bold">{lead.company}</Text>
                  </Column>
                </Row>
                <Hr className="my-4 border-gray-200" />
                <Text className="m-0 text-center text-sm font-medium text-gray-500">
                  Email Address
                </Text>
                <Text className="m-0 text-center text-lg font-bold">{lead.email}</Text>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Assignment Details 📋
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              This lead has been strategically assigned to ensure optimal engagement and follow-up.
              Given the lead's high priority status and demonstrated interest, prompt action within
              the specified timeline is crucial for maintaining momentum.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Row className="w-full">
                  {Object.entries(assignmentDetails).map(([key, value]) => (
                    <Column key={key} className="px-2 text-center">
                      <Text className="m-0 text-sm font-medium text-gray-500">{key}</Text>
                      <Text className="m-0 text-base font-medium">{value}</Text>
                    </Column>
                  ))}
                </Row>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Context & Notes 📝
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Important context about this lead's interests and engagement. These insights should
              guide your initial outreach strategy and help you prepare for meaningful conversations
              about their specific needs and challenges.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Text className="m-0 text-sm">{lead.notes}</Text>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Recommended Action Plan 📋
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Based on the lead's profile and engagement patterns, we've outlined a strategic
              approach for your next steps. Following this sequence will help ensure effective
              engagement and maximize the opportunity for conversion.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {suggestedActions.map((action, index) => (
                  <Text key={`${index}-${action}-${Math.random()}`} className="m-0 mb-2 text-sm">
                    {index + 1}. {action}
                  </Text>
                ))}
              </div>
            </Section>

            <Text className="mb-4 mt-8 text-sm leading-6 text-black">
              Remember to document all interactions and updates in the lead management system. Quick
              and strategic follow-up is key to maintaining engagement with this high-potential
              opportunity.
            </Text>

            <Section className="mb-8 mt-8 text-center">
              <Link
                className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
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
  isHighlight = false,
}: {
  title: string
  value: string
  isScore?: boolean
  isHighlight?: boolean
}) => {
  const textColor = isScore ? 'text-blue-600' : isHighlight ? 'text-red-600' : 'text-black'

  return (
    <Column className="text-center">
      <Text className="font-medium text-gray-400">{title}</Text>
      <Text className={`-mt-3 text-lg font-medium ${textColor}`}>{value}</Text>
    </Column>
  )
}
