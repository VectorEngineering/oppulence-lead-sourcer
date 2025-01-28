import { COMPARE_PAGES, CUSTOMER_STORIES } from '../../content'
import { ConnectedDotsFill, CubeSettingsFill } from '../../icons'
import {
  ContentLinkCard,
  LargeLinkCard,
  contentHeadingClassName,
} from './shared'
import { cn, createHref } from '@dub/utils'

import { AnalyticsGraphic } from './graphics/analytics-graphic'
import Link from 'next/link'
import { LinksGraphic } from './graphics/links-graphic'
import { BusinessConfig as platform } from '@dub/platform-config'

const largeLinks = [
  {
    title: `${platform.company} API`,
    description: 'Programmatic link creation at scale',
    icon: CubeSettingsFill,
    href: '/docs/api-reference/introduction',
  },
  {
    title: `${platform.company} Integrations`,
    description: `Connect ${platform.company} with your favorite tools`,
    icon: ConnectedDotsFill,
    href: '/docs/integrations',
  },
]

export function ProductContent({ domain }: { domain: string }) {
  return (
    <div className="grid w-[1020px] grid-cols-[repeat(2,minmax(0,1fr)),0.8fr] gap-4 p-5">
      <Link
        href={createHref('/home', domain)}
        className="group relative flex flex-col rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
      >
        <div className="p-5 pb-0">
          <span className="text-sm font-medium text-neutral-900 dark:text-white">
            {platform.company} Links
          </span>
          <p className="mt-3 max-w-56 text-sm text-neutral-500 dark:text-white/60">
            Short links with superpowers for the modern marketer
          </p>
        </div>
        <div className="relative grow overflow-hidden">
          <LinksGraphic className="absolute bottom-0 h-auto w-full [mask-image:linear-gradient(transparent,black_20%,black_80%,transparent)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#f4950c,transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-[0.2]" />
      </Link>
      <div className="flex flex-col gap-4">
        <Link
          href={createHref('/analytics', domain)}
          className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 dark:border-white/20 dark:bg-white/10"
        >
          <AnalyticsGraphic className="absolute bottom-0 h-auto w-full translate-y-[15%] [mask-image:linear-gradient(90deg,transparent,black)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#36D78F,transparent)] opacity-[0.07] transition-opacity duration-150 group-hover:opacity-[0.2]" />
          <div className="h-56 p-5">
            <span className="text-sm font-medium text-neutral-900 dark:text-white">
              {platform.company} Analytics
            </span>
            <p className="mt-3 max-w-48 text-sm text-neutral-500 dark:text-white/60">
              Powerful real-time analytics with conversion tracking
            </p>
          </div>
        </Link>
        <div className="grid grow grid-rows-2 gap-4">
          {largeLinks.map(({ title, description, icon, href }) => (
            <LargeLinkCard
              key={title}
              title={title}
              description={description}
              icon={icon}
              href={createHref(href, domain)}
            />
          ))}
        </div>
      </div>
      <div className="pl-2 pt-2">
        <p className={cn(contentHeadingClassName, 'mb-2')}>Customer Stories</p>
        <div className="grid grid-cols-1">
          {CUSTOMER_STORIES.map(
            ({ icon: Icon, iconClassName, title, description, href }) => (
              <ContentLinkCard
                key={href}
                href={createHref(href, domain, {
                  utm_source: 'Custom Domain',
                  utm_medium: 'Navbar',
                  utm_campaign: domain,
                  utm_content: title,
                })}
                className="-mx-2"
                icon={
                  <div className="shrink-0 rounded-[10px] border border-gray-200 bg-white/50 p-2 dark:border-white/20 dark:bg-white/10">
                    <Icon
                      className={cn(
                        'h-4 w-4 shrink-0 text-gray-600 transition-colors dark:text-white/60',
                        iconClassName
                      )}
                    />
                  </div>
                }
                title={title}
                description={description}
              />
            )
          )}
          <ContentLinkCard
            href={createHref('/customers', domain, {
              utm_source: 'Custom Domain',
              utm_medium: 'Navbar',
              utm_campaign: domain,
              utm_content: 'Customer Stories',
            })}
            title="View all stories"
            showArrow
          />
        </div>

        <p className={cn(contentHeadingClassName, 'mb-2 mt-5')}>Compare</p>
        <div className="flex flex-col">
          {COMPARE_PAGES.map(({ name, slug }) => (
            <ContentLinkCard
              key={slug}
              href={createHref(`/compare/${slug}`, domain, {
                utm_source: 'Custom Domain',
                utm_medium: 'Navbar',
                utm_campaign: domain,
                utm_content: `${platform.company} vs. ${name}`,
              })}
              title={`${platform.company} vs. ${name}`}
              showArrow
            />
          ))}
        </div>
      </div>
    </div>
  )
}
