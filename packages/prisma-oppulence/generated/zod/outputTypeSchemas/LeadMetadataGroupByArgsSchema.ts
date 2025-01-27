import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadMetadataWhereInputSchema } from '../inputTypeSchemas/LeadMetadataWhereInputSchema'
import { LeadMetadataOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadMetadataOrderByWithAggregationInputSchema'
import { LeadMetadataScalarFieldEnumSchema } from '../inputTypeSchemas/LeadMetadataScalarFieldEnumSchema'
import { LeadMetadataScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadMetadataScalarWhereWithAggregatesInputSchema'

export const LeadMetadataGroupByArgsSchema: z.ZodType<Prisma.LeadMetadataGroupByArgs> = z
    .object({
        where: LeadMetadataWhereInputSchema.optional(),
        orderBy: z.union([LeadMetadataOrderByWithAggregationInputSchema.array(), LeadMetadataOrderByWithAggregationInputSchema]).optional(),
        by: LeadMetadataScalarFieldEnumSchema.array(),
        having: LeadMetadataScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadMetadataGroupByArgsSchema
