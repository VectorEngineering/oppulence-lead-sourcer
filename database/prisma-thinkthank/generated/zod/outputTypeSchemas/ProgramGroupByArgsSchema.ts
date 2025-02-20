import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramWhereInputSchema } from '../inputTypeSchemas/ProgramWhereInputSchema'
import { ProgramOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProgramOrderByWithAggregationInputSchema'
import { ProgramScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramScalarFieldEnumSchema'
import { ProgramScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProgramScalarWhereWithAggregatesInputSchema'

export const ProgramGroupByArgsSchema: z.ZodType<Prisma.ProgramGroupByArgs> = z
    .object({
        where: ProgramWhereInputSchema.optional(),
        orderBy: z.union([ProgramOrderByWithAggregationInputSchema.array(), ProgramOrderByWithAggregationInputSchema]).optional(),
        by: ProgramScalarFieldEnumSchema.array(),
        having: ProgramScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramGroupByArgsSchema
