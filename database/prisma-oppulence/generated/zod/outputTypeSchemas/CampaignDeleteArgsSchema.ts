import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignIncludeSchema } from '../inputTypeSchemas/CampaignIncludeSchema'
import { CampaignWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignWhereUniqueInputSchema'
import { LeadFindManyArgsSchema } from './LeadFindManyArgsSchema'
import { LeadTouchpointFindManyArgsSchema } from './LeadTouchpointFindManyArgsSchema'
import { CampaignVariantFindManyArgsSchema } from './CampaignVariantFindManyArgsSchema'
import { CampaignCountOutputTypeArgsSchema } from './CampaignCountOutputTypeArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CampaignSelectSchema: z.ZodType<Prisma.CampaignSelect> = z
    .object({
        id: z.boolean().optional(),
        name: z.boolean().optional(),
        description: z.boolean().optional(),
        type: z.boolean().optional(),
        status: z.boolean().optional(),
        budget: z.boolean().optional(),
        actualSpend: z.boolean().optional(),
        startDate: z.boolean().optional(),
        endDate: z.boolean().optional(),
        impressions: z.boolean().optional(),
        clicks: z.boolean().optional(),
        conversions: z.boolean().optional(),
        revenue: z.boolean().optional(),
        roi: z.boolean().optional(),
        utmSource: z.boolean().optional(),
        utmMedium: z.boolean().optional(),
        utmCampaign: z.boolean().optional(),
        utmContent: z.boolean().optional(),
        utmTerm: z.boolean().optional(),
        abTestEnabled: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        leads: z.union([z.boolean(), z.lazy(() => LeadFindManyArgsSchema)]).optional(),
        touchpoints: z.union([z.boolean(), z.lazy(() => LeadTouchpointFindManyArgsSchema)]).optional(),
        variants: z.union([z.boolean(), z.lazy(() => CampaignVariantFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => CampaignCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export const CampaignDeleteArgsSchema: z.ZodType<Prisma.CampaignDeleteArgs> = z
    .object({
        select: CampaignSelectSchema.optional(),
        include: CampaignIncludeSchema.optional(),
        where: CampaignWhereUniqueInputSchema
    })
    .strict()

export default CampaignDeleteArgsSchema
