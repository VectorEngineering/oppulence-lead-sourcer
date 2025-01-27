import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadArgsSchema } from '../outputTypeSchemas/LeadArgsSchema'
import { CampaignFindManyArgsSchema } from '../outputTypeSchemas/CampaignFindManyArgsSchema'
import { LeadTouchpointCountOutputTypeArgsSchema } from '../outputTypeSchemas/LeadTouchpointCountOutputTypeArgsSchema'

export const LeadTouchpointSelectSchema: z.ZodType<Prisma.LeadTouchpointSelect> = z
    .object({
        id: z.boolean().optional(),
        leadId: z.boolean().optional(),
        channel: z.boolean().optional(),
        campaign: z.boolean().optional(),
        content: z.boolean().optional(),
        interaction: z.boolean().optional(),
        timestamp: z.boolean().optional(),
        isFirstTouch: z.boolean().optional(),
        isLastTouch: z.boolean().optional(),
        lead: z.union([z.boolean(), z.lazy(() => LeadArgsSchema)]).optional(),
        Campaign: z.union([z.boolean(), z.lazy(() => CampaignFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => LeadTouchpointCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default LeadTouchpointSelectSchema
