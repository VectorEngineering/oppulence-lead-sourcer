import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignVariantWhereInputSchema } from '../inputTypeSchemas/CampaignVariantWhereInputSchema'

export const CampaignVariantDeleteManyArgsSchema: z.ZodType<Prisma.CampaignVariantDeleteManyArgs> = z
    .object({
        where: CampaignVariantWhereInputSchema.optional()
    })
    .strict()

export default CampaignVariantDeleteManyArgsSchema
