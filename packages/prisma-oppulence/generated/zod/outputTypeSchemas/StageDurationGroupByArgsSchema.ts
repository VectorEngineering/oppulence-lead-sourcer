import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationWhereInputSchema } from '../inputTypeSchemas/StageDurationWhereInputSchema'
import { StageDurationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/StageDurationOrderByWithAggregationInputSchema'
import { StageDurationScalarFieldEnumSchema } from '../inputTypeSchemas/StageDurationScalarFieldEnumSchema'
import { StageDurationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/StageDurationScalarWhereWithAggregatesInputSchema'

export const StageDurationGroupByArgsSchema: z.ZodType<Prisma.StageDurationGroupByArgs> = z
    .object({
        where: StageDurationWhereInputSchema.optional(),
        orderBy: z
            .union([StageDurationOrderByWithAggregationInputSchema.array(), StageDurationOrderByWithAggregationInputSchema])
            .optional(),
        by: StageDurationScalarFieldEnumSchema.array(),
        having: StageDurationScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default StageDurationGroupByArgsSchema
