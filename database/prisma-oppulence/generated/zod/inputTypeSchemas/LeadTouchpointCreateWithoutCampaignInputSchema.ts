import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutTouchpointsInputSchema } from './LeadCreateNestedOneWithoutTouchpointsInputSchema'

export const LeadTouchpointCreateWithoutCampaignInputSchema: z.ZodType<Prisma.LeadTouchpointCreateWithoutCampaignInput> = z
    .object({
        id: z.string().cuid().optional(),
        channel: z.string(),
        campaign: z.string().optional().nullable(),
        content: z.string().optional().nullable(),
        interaction: z.string().optional().nullable(),
        timestamp: z.coerce.date(),
        isFirstTouch: z.boolean(),
        isLastTouch: z.boolean(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutTouchpointsInputSchema)
    })
    .strict()

export default LeadTouchpointCreateWithoutCampaignInputSchema
