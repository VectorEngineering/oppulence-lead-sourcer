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

export default function SalesTargetAchievement({
  email = 'panic@thedis.co',
  workspace = {
    name: 'Sales Team',
    slug: 'sales',
    logo: platform.assets.logo,
  },
  achievement = {
    period: 'Q3 2024',
    target: {
      revenue: 1000000,
      deals: 50,
      meetings: 200,
    },
    achieved: {
      revenue: 1150000,
      deals: 55,
      meetings: 225,
    },
    highlights: [
      'Exceeded revenue target by 15%',
      'Surpassed deal target by 10%',
      'Increased meeting efficiency',
      'Improved win rate by 8%',
    ],
    topContributors: [
      {
        name: 'Sarah Johnson',
        achievement: '180% of target',
        deals: 15,
        revenue: 350000,
      },
      {
        name: 'Mike Chen',
        achievement: '165% of target',
        deals: 12,
        revenue: 280000,
      },
    ],
    nextPeriod: {
      revenue: 1200000,
      deals: 60,
      meetings: 240,
      focus: [
        'Enterprise segment expansion',
        'Product upsell opportunities',
        'Partner channel development',
        'New market penetration',
      ],
    },
  },
}: {
  email: string
  workspace: {
    name: string
    slug: string
    logo?: string | null
  }
  achievement: {
    period: string
    target: {
      revenue: number
      deals: number
      meetings: number
    }
    achieved: {
      revenue: number
      deals: number
      meetings: number
    }
    highlights: string[]
    topContributors: Array<{
      name: string
      achievement: string
      deals: number
      revenue: number
    }>
    nextPeriod: {
      revenue: number
      deals: number
      meetings: number
      focus: string[]
    }
  }
}) {
  const stats = {
    Revenue: `$${achievement.achieved.revenue.toLocaleString()}`,
    Target: `$${achievement.target.revenue.toLocaleString()}`,
    Deals: achievement.achieved.deals.toString(),
    Meetings: achievement.achieved.meetings.toString(),
  }

  const achievementRates = {
    Revenue: `${Math.round((achievement.achieved.revenue / achievement.target.revenue) * 100)}%`,
    Deals: `${Math.round((achievement.achieved.deals / achievement.target.deals) * 100)}%`,
    Meetings: `${Math.round((achievement.achieved.meetings / achievement.target.meetings) * 100)}%`,
  }

  return (
    <Html>
      <Head />
      <Preview>
        Target Achievement Report: {achievement.period} - $
        {achievement.achieved.revenue.toLocaleString()} revenue (
        {Math.round((achievement.achieved.revenue / achievement.target.revenue) * 100).toString()}%
        of target)
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
              Sales Target Achievement 🎯
            </Heading>
            <Text className="text-sm leading-6 text-black">
              Congratulations on your outstanding performance for {achievement.period}! Your team
              has demonstrated exceptional execution, surpassing key targets and setting new
              benchmarks for success.
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
              Achievement Rates 📈
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Your team has shown remarkable performance across all key metrics. These achievement
              rates reflect the dedication and effectiveness of your sales strategies.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Row className="w-full">
                  {Object.entries(achievementRates).map(([key, value]) => (
                    <Column key={key} className="px-2 text-center">
                      <Text className="m-0 text-sm font-medium text-gray-500">{key}</Text>
                      <Text className="m-0 text-base font-medium text-green-600">{value}</Text>
                    </Column>
                  ))}
                </Row>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Key Highlights 🌟
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              These achievements showcase the effectiveness of your team's execution and highlight
              areas of exceptional performance that can be leveraged for future success.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {achievement.highlights.map((highlight, index) => (
                  <Text key={`${index}-${highlight}-${Math.random()}`} className="m-0 mb-2 text-sm">
                    {index + 1}. {highlight}
                  </Text>
                ))}
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Top Contributors 🏆
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Recognition of outstanding individual performances who have significantly contributed
              to exceeding our targets. Their strategies and best practices can serve as valuable
              examples for the entire team.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {achievement.topContributors.map((contributor, index) => (
                  <div
                    key={`${index}-${contributor.name}-${Math.random()}`}
                    className={index !== 0 ? 'mt-4' : ''}
                  >
                    <Row>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Name</Text>
                        <Text className="m-0 text-base font-medium">{contributor.name}</Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Achievement</Text>
                        <Text className="m-0 text-base font-medium text-green-600">
                          {contributor.achievement}
                        </Text>
                      </Column>
                      <Column className="px-2">
                        <Text className="m-0 text-sm font-medium text-gray-500">Revenue</Text>
                        <Text className="m-0 text-base font-medium">
                          ${contributor.revenue.toLocaleString()}
                        </Text>
                      </Column>
                    </Row>
                    {index !== achievement.topContributors.length - 1 && (
                      <Hr className="my-4 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Next Period Goals 🎯
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              Building on this success, we've set ambitious but achievable targets for the next
              period. These goals reflect our growth trajectory and market opportunities.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                <Row>
                  <Column className="px-2">
                    <Text className="m-0 text-sm font-medium text-gray-500">Revenue Target</Text>
                    <Text className="m-0 text-base font-medium">
                      ${achievement.nextPeriod.revenue.toLocaleString()}
                    </Text>
                  </Column>
                  <Column className="px-2">
                    <Text className="m-0 text-sm font-medium text-gray-500">Deals Target</Text>
                    <Text className="m-0 text-base font-medium">
                      {achievement.nextPeriod.deals}
                    </Text>
                  </Column>
                  <Column className="px-2">
                    <Text className="m-0 text-sm font-medium text-gray-500">Meetings Target</Text>
                    <Text className="m-0 text-base font-medium">
                      {achievement.nextPeriod.meetings}
                    </Text>
                  </Column>
                </Row>
              </div>
            </Section>

            <Heading className="mx-0 mb-4 mt-8 p-0 text-xl font-semibold text-black">
              Strategic Focus Areas 🎯
            </Heading>
            <Text className="mb-4 text-sm leading-6 text-black">
              To achieve our next period goals, we've identified key focus areas that align with our
              growth strategy and market opportunities.
            </Text>
            <Section className="my-4">
              <div className="rounded-lg border border-solid border-gray-200 p-4">
                {achievement.nextPeriod.focus.map((focus, index) => (
                  <Text key={`${index}-${focus}-${Math.random()}`} className="m-0 mb-2 text-sm">
                    {index + 1}. {focus}
                  </Text>
                ))}
              </div>
            </Section>

            <Text className="mb-4 mt-8 text-sm leading-6 text-black">
              Congratulations again on this outstanding achievement! Let's maintain this momentum
              and continue driving towards our ambitious goals for the next period.
            </Text>

            <Section className="mb-8 mt-8 text-center">
              <Link
                className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`${platform.platformUrl}/${workspace.slug}/targets`}
              >
                View Detailed Targets
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
