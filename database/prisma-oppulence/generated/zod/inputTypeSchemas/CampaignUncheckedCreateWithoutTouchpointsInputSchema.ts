import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignTypeSchema } from './CampaignTypeSchema'
import { CampaignStatusSchema } from './CampaignStatusSchema'
import { LeadUncheckedCreateNestedManyWithoutCampaignInputSchema } from './LeadUncheckedCreateNestedManyWithoutCampaignInputSchema'
import { CampaignVariantUncheckedCreateNestedManyWithoutCampaignInputSchema } from './CampaignVariantUncheckedCreateNestedManyWithoutCampaignInputSchema'

export const CampaignUncheckedCreateWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignUncheckedCreateWithoutTouchpointsInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        type: z.lazy(() => CampaignTypeSchema),
        status: z.lazy(() => CampaignStatusSchema),
        budget: z.number(),
        actualSpend: z.number().optional(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional().nullable(),
        impressions: z.number().int().optional(),
        clicks: z.number().int().optional(),
        conversions: z.number().int().optional(),
        revenue: z.number().optional(),
        roi: z.number().optional().nullable(),
        utmSource: z.string().optional().nullable(),
        utmMedium: z.string().optional().nullable(),
        utmCampaign: z.string().optional().nullable(),
        utmContent: z.string().optional().nullable(),
        utmTerm: z.string().optional().nullable(),
        abTestEnabled: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        leads: z.lazy(() => LeadUncheckedCreateNestedManyWithoutCampaignInputSchema).optional(),
        variants: z.lazy(() => CampaignVariantUncheckedCreateNestedManyWithoutCampaignInputSchema).optional()
    })
    .strict()

export default CampaignUncheckedCreateWithoutTouchpointsInputSchema
