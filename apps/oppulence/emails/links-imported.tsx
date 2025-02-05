import { linkConstructor, pluralize, timeAgo } from '@dub/utils'
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

export default function LinksImported({
  email = 'panic@thedis.co',
  provider = 'Bitly',
  count = 1020,
  links = [
    {
      domain: 'ac.me',
      key: 'sales',
      createdAt: new Date('2023-07-16T00:00:00.000Z'),
    },
    {
      domain: 'ac.me',
      key: 'instagram',
      createdAt: new Date('2023-07-01T00:00:00.000Z'),
    },
    {
      domain: 'ac.me',
      key: 'facebook',
      createdAt: new Date('2023-06-18T00:00:00.000Z'),
    },
    {
      domain: 'ac.me',
      key: 'twitter',
      createdAt: new Date('2023-06-01T00:00:00.000Z'),
    },
    {
      domain: 'ac.me',
      key: 'linkedin',
      createdAt: new Date('2023-05-16T00:00:00.000Z'),
    },
  ],
  workspaceName = 'Acme',
  workspaceSlug = 'acme',
  domains = ['ac.me'],
}: {
  email: string
  provider: 'Bitly' | 'Short.io' | 'Rebrandly' | 'CSV'
  count: number
  links: {
    domain: string
    key: string
    createdAt: Date
  }[]
  workspaceName: string
  workspaceSlug: string
  domains: string[]
}) {
  return (
    <Html>
      <Head />
      <Preview>Your {provider} links have been imported</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
            <Section className="mt-8">
              <Img
                src={platform.assets.wordmark}
                height="40"
                alt={platform.company}
                className="mx-auto my-0"
              />
            </Section>
            <Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
              Your {provider} links have been imported
            </Heading>
            <Text className="text-sm leading-6 text-black">
              We have successfully{' '}
              <strong>imported {Intl.NumberFormat('en-us').format(count)} links</strong> from{' '}
              {provider} into your {platform.company} workspace,{' '}
              <Link
                href={`${platform.platformUrl}/${workspaceSlug}`}
                className="font-medium text-blue-600 no-underline"
              >
                {workspaceName}↗
              </Link>{' '}
              , for the {pluralize('domain', domains.length)} <strong>{domains.join(', ')}</strong>.
            </Text>
            {links.length > 0 && (
              <Section>
                <Row className="pb-2">
                  <Column align="left" className="text-sm text-gray-500">
                    Link
                  </Column>
                  <Column align="right" className="text-sm text-gray-500">
                    Created
                  </Column>
                </Row>
                {links.map(({ domain, key, createdAt }, index) => (
                  <div key={`${index}-${domain}-${key}-${Math.random()}`}>
                    <Row>
                      <Column align="left" className="text-sm font-medium">
                        {linkConstructor({ domain, key, pretty: true })}
                      </Column>
                      <Column
                        align="right"
                        className="text-sm text-gray-600"
                        suppressHydrationWarning
                      >
                        {timeAgo(createdAt)}
                      </Column>
                    </Row>
                    {index !== links.length - 1 && (
                      <Hr className="my-2 w-full border border-gray-200" />
                    )}
                  </div>
                ))}
              </Section>
            )}
            {count > 5 && (
              <Section className="my-8 text-center">
                <Link
                  className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
                  href={`${platform.platformUrl}/${workspaceSlug}`}
                >
                  View {Intl.NumberFormat('en-us').format(count - 5)} more links
                </Link>
              </Section>
            )}
            <Footer email={email} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
