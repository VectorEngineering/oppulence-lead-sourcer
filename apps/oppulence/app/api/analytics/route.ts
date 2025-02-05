import { analyticsPathParamsSchema, analyticsQuerySchema } from '@/lib/zod/schemas/analytics'

import { VALID_ANALYTICS_ENDPOINTS } from '@/lib/analytics/constants'
import { getAnalytics } from '@/lib/analytics/get-analytics'
import { validDateRangeForPlan } from '@/lib/analytics/utils'
import { getDomainOrThrow } from '@/lib/api/domains/get-domain-or-throw'
import { getLinkOrThrow } from '@/lib/api/links/get-link-or-throw'
import { throwIfClicksUsageExceeded } from '@/lib/api/links/usage-checks'
import { withWorkspace } from '@/lib/auth'
import { Link } from '@dub/prisma-oppulence/client'
import { NextResponse } from 'next/server'

// GET /api/analytics – get analytics
export const GET = withWorkspace(
  async ({ params, searchParams, workspace }) => {
    throwIfClicksUsageExceeded(workspace)

    let { eventType: oldEvent, endpoint: oldType } = analyticsPathParamsSchema.parse(params)

    // for backwards compatibility (we used to support /analytics/[endpoint] as well)
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    if (
      !oldType &&
      oldEvent &&
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      VALID_ANALYTICS_ENDPOINTS.includes(oldEvent as any)
    ) {
      oldType = oldEvent
      oldEvent = undefined
    }

    const parsedParams = analyticsQuerySchema.parse(searchParams)

    let { event, groupBy, interval, start, end, linkId, externalId, domain, key } = parsedParams
    let link: Link | null = null

    if (domain) {
      await getDomainOrThrow({ workspace, domain })
    }

    if (linkId || externalId || (domain && key)) {
      link = await getLinkOrThrow({
        workspaceId: workspace.id,
        linkId,
        externalId,
        domain,
        key,
      })
    }

    // Ensure event and groupBy have valid values
    event = (oldEvent || event) as 'clicks' | 'leads' | 'sales' | 'composite'
    groupBy = (oldType || groupBy) as
      | 'count'
      | 'timeseries'
      | 'continents'
      | 'regions'
      | 'countries'
      | 'cities'
      | 'devices'
      | 'browsers'
      | 'os'
      | 'trigger'
      | 'triggers'
      | 'referers'
      | 'referer_urls'
      | 'top_links'
      | 'top_urls'

    validDateRangeForPlan({
      plan: workspace.plan,
      conversionEnabled: workspace.conversionEnabled,
      interval,
      start,
      end,
      throwError: true,
    })

    // Identify the request is from deprecated clicks endpoint
    // (/api/analytics/clicks)
    // (/api/analytics/count)
    // (/api/analytics/clicks/clicks)
    // (/api/analytics/clicks/count)
    const isDeprecatedClicksEndpoint = oldEvent === 'clicks' || oldType === 'count'

    const response = await getAnalytics({
      ...parsedParams,
      event,
      groupBy,
      ...(link && { linkId: link.id }),
      workspaceId: workspace.id,
      isDeprecatedClicksEndpoint,
    })

    return NextResponse.json(response)
  },
  {
    requiredPermissions: ['analytics.read'],
  }
)
