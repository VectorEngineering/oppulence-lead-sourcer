import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantCreateManyInputSchema } from '../inputTypeSchemas/CampaignVariantCreateManyInputSchema'

export const CampaignVariantCreateManyArgsSchema: z.ZodType<Prisma.CampaignVariantCreateManyArgs> = z
    .object({
        data: z.union([CampaignVariantCreateManyInputSchema, CampaignVariantCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default CampaignVariantCreateManyArgsSchema
