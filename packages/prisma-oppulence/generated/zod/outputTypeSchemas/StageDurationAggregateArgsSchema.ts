import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageDurationWhereInputSchema } from '../inputTypeSchemas/StageDurationWhereInputSchema'
import { StageDurationOrderByWithRelationInputSchema } from '../inputTypeSchemas/StageDurationOrderByWithRelationInputSchema'
import { StageDurationWhereUniqueInputSchema } from '../inputTypeSchemas/StageDurationWhereUniqueInputSchema'

export const StageDurationAggregateArgsSchema: z.ZodType<Prisma.StageDurationAggregateArgs> = z
    .object({
        where: StageDurationWhereInputSchema.optional(),
        orderBy: z.union([StageDurationOrderByWithRelationInputSchema.array(), StageDurationOrderByWithRelationInputSchema]).optional(),
        cursor: StageDurationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default StageDurationAggregateArgsSchema
