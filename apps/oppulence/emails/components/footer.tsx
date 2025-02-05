import { Hr, Link, Text } from '@react-email/components'

import { OppulenceConfig as platform } from '@dub/platform-config'
import { Tailwind } from '@react-email/tailwind'

export default function Footer({
  email,
  marketing,
  notificationSettingsUrl,
}: {
  email: string
  marketing?: boolean
  notificationSettingsUrl?: string
}) {
  if (marketing) {
    return (
      <Tailwind>
        <Hr className="mx-0 my-6 w-full border border-gray-200" />
        <Text className="text-[12px] leading-6 text-gray-500">
          We send out product update emails once a month – no spam, no nonsense. Don't want to get
          these emails?{' '}
          <Link
            className="text-gray-700 underline"
            href={`${platform.platformUrl}/account/settings`}
          >
            Unsubscribe here.
          </Link>
        </Text>
        <Text className="text-[12px] text-gray-500">
          {platform.company}, Inc.
          <br />
          {platform.address.street}
          <br />
          {platform.address.city}, {platform.address.state} {platform.address.zipCode}
        </Text>
      </Tailwind>
    )
  }

  return (
    <Tailwind>
      <Hr className="mx-0 my-6 w-full border border-gray-200" />
      <Text className="text-[12px] leading-6 text-gray-500">
        This email was intended for <span className="text-black">{email}</span>. If you were not
        expecting this email, you can ignore this email. If you are concerned about your account's
        safety, please reply to this email to get in touch with us.
      </Text>

      {notificationSettingsUrl && (
        <Text className="text-[12px] leading-6 text-gray-500">
          Don’t want to get these emails?{' '}
          <Link className="text-gray-700 underline" href={notificationSettingsUrl}>
            Adjust your notification settings
          </Link>
        </Text>
      )}
      <Text className="text-[12px] text-gray-500">
        {platform.company}, Inc.
        <br />
        {platform.address.street}
        <br />
        {platform.address.city}, {platform.address.state} {platform.address.zipCode}
      </Text>
    </Tailwind>
  )
}
