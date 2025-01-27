import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignUncheckedCreateNestedManyWithoutTouchpointsInputSchema } from './CampaignUncheckedCreateNestedManyWithoutTouchpointsInputSchema'

export const LeadTouchpointUncheckedCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointUncheckedCreateWithoutLeadInput> = z
    .object({
        id: z.string().cuid().optional(),
        channel: z.string(),
        campaign: z.string().optional().nullable(),
        content: z.string().optional().nullable(),
        interaction: z.string().optional().nullable(),
        timestamp: z.coerce.date(),
        isFirstTouch: z.boolean(),
        isLastTouch: z.boolean(),
        Campaign: z.lazy(() => CampaignUncheckedCreateNestedManyWithoutTouchpointsInputSchema).optional()
    })
    .strict()

export default LeadTouchpointUncheckedCreateWithoutLeadInputSchema
