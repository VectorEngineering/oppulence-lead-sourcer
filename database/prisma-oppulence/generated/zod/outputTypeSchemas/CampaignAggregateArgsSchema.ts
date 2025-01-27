import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { CampaignWhereInputSchema } from '../inputTypeSchemas/CampaignWhereInputSchema'
import { CampaignOrderByWithRelationInputSchema } from '../inputTypeSchemas/CampaignOrderByWithRelationInputSchema'
import { CampaignWhereUniqueInputSchema } from '../inputTypeSchemas/CampaignWhereUniqueInputSchema'

export const CampaignAggregateArgsSchema: z.ZodType<Prisma.CampaignAggregateArgs> = z
    .object({
        where: CampaignWhereInputSchema.optional(),
        orderBy: z.union([CampaignOrderByWithRelationInputSchema.array(), CampaignOrderByWithRelationInputSchema]).optional(),
        cursor: CampaignWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default CampaignAggregateArgsSchema
