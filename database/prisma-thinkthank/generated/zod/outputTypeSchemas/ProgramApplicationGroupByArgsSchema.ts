import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationWhereInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereInputSchema'
import { ProgramApplicationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProgramApplicationOrderByWithAggregationInputSchema'
import { ProgramApplicationScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramApplicationScalarFieldEnumSchema'
import { ProgramApplicationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProgramApplicationScalarWhereWithAggregatesInputSchema'

export const ProgramApplicationGroupByArgsSchema: z.ZodType<Prisma.ProgramApplicationGroupByArgs> = z
    .object({
        where: ProgramApplicationWhereInputSchema.optional(),
        orderBy: z
            .union([ProgramApplicationOrderByWithAggregationInputSchema.array(), ProgramApplicationOrderByWithAggregationInputSchema])
            .optional(),
        by: ProgramApplicationScalarFieldEnumSchema.array(),
        having: ProgramApplicationScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramApplicationGroupByArgsSchema
