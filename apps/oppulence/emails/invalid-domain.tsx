import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

import { OppulenceConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'
import Footer from './components/footer'

export default function InvalidDomain({
  email = 'panic@thedis.co',
  domain = 'getvector.co',
  workspaceSlug = 'getvector',
  invalidDays = 14,
  appDomain = 'getvector.co',
}: {
  email: string
  domain: string
  workspaceSlug: string
  invalidDays: number
  appDomain: string
}): JSX.Element {
  const notificationSettingsUrl = `https://app.${appDomain}/${workspaceSlug}/settings/notifications`

  return (
    <Html>
      <Head />
      <Preview>Invalid Domain Configuration</Preview>
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
              Invalid Domain Configuration
            </Heading>
            <Text className="text-sm leading-6 text-black">
              Your domain <code className="text-purple-600">{domain}</code> for your{' '}
              {platform.company} workspace{' '}
              <Link
                href={`${platform.platformUrl}/${workspaceSlug}`}
                className="font-medium text-blue-600 no-underline"
              >
                {workspaceSlug}↗
              </Link>{' '}
              has been invalid for {invalidDays} days.
            </Text>
            <Text className="text-sm leading-6 text-black">
              If your domain remains unconfigured for 30 days, it will be automatically deleted from{' '}
              {platform.company}. Please click the link below to configure your domain.
            </Text>
            <Section className="my-8 text-center">
              <Link
                className="rounded-full bg-black px-6 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={`${platform.platformUrl}/${workspaceSlug}/settings/domains`}
              >
                Configure domain
              </Link>
            </Section>
            <Text className="text-sm leading-6 text-black">
              If you do not want to keep this domain on {platform.company}, you can{' '}
              <Link
                href={`${platform.platformUrl}/${workspaceSlug}/settings/domains`}
                className="font-medium text-blue-600 no-underline"
              >
                delete it
              </Link>{' '}
              or simply ignore this email. To respect your inbox,{' '}
              {invalidDays < 28
                ? `we will only send you one more email about this in ${28 - invalidDays} days.`
                : 'this will be the last time we will email you about this.'}
            </Text>
            <Footer email={email} notificationSettingsUrl={notificationSettingsUrl} />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
