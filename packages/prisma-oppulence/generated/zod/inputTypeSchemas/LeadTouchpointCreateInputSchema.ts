import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutTouchpointsInputSchema } from './LeadCreateNestedOneWithoutTouchpointsInputSchema'
import { CampaignCreateNestedManyWithoutTouchpointsInputSchema } from './CampaignCreateNestedManyWithoutTouchpointsInputSchema'

export const LeadTouchpointCreateInputSchema: z.ZodType<Prisma.LeadTouchpointCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        channel: z.string(),
        campaign: z.string().optional().nullable(),
        content: z.string().optional().nullable(),
        interaction: z.string().optional().nullable(),
        timestamp: z.coerce.date(),
        isFirstTouch: z.boolean(),
        isLastTouch: z.boolean(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutTouchpointsInputSchema),
        Campaign: z.lazy(() => CampaignCreateNestedManyWithoutTouchpointsInputSchema).optional()
    })
    .strict()

export default LeadTouchpointCreateInputSchema
