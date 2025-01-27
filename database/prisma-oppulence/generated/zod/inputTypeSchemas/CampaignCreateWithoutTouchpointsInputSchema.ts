import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CampaignTypeSchema } from './CampaignTypeSchema'
import { CampaignStatusSchema } from './CampaignStatusSchema'
import { LeadCreateNestedManyWithoutCampaignInputSchema } from './LeadCreateNestedManyWithoutCampaignInputSchema'
import { CampaignVariantCreateNestedManyWithoutCampaignInputSchema } from './CampaignVariantCreateNestedManyWithoutCampaignInputSchema'

export const CampaignCreateWithoutTouchpointsInputSchema: z.ZodType<Prisma.CampaignCreateWithoutTouchpointsInput> = z
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
        leads: z.lazy(() => LeadCreateNestedManyWithoutCampaignInputSchema).optional(),
        variants: z.lazy(() => CampaignVariantCreateNestedManyWithoutCampaignInputSchema).optional()
    })
    .strict()

export default CampaignCreateWithoutTouchpointsInputSchema
