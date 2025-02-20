import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PartnerUserWhereInputSchema } from '../inputTypeSchemas/PartnerUserWhereInputSchema'
import { PartnerUserOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PartnerUserOrderByWithAggregationInputSchema'
import { PartnerUserScalarFieldEnumSchema } from '../inputTypeSchemas/PartnerUserScalarFieldEnumSchema'
import { PartnerUserScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PartnerUserScalarWhereWithAggregatesInputSchema'

export const PartnerUserGroupByArgsSchema: z.ZodType<Prisma.PartnerUserGroupByArgs> = z
    .object({
        where: PartnerUserWhereInputSchema.optional(),
        orderBy: z.union([PartnerUserOrderByWithAggregationInputSchema.array(), PartnerUserOrderByWithAggregationInputSchema]).optional(),
        by: PartnerUserScalarFieldEnumSchema.array(),
        having: PartnerUserScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default PartnerUserGroupByArgsSchema
