import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramResourceWhereInputSchema } from '../inputTypeSchemas/ProgramResourceWhereInputSchema'
import { ProgramResourceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProgramResourceOrderByWithAggregationInputSchema'
import { ProgramResourceScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramResourceScalarFieldEnumSchema'
import { ProgramResourceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProgramResourceScalarWhereWithAggregatesInputSchema'

export const ProgramResourceGroupByArgsSchema: z.ZodType<Prisma.ProgramResourceGroupByArgs> = z
    .object({
        where: ProgramResourceWhereInputSchema.optional(),
        orderBy: z
            .union([ProgramResourceOrderByWithAggregationInputSchema.array(), ProgramResourceOrderByWithAggregationInputSchema])
            .optional(),
        by: ProgramResourceScalarFieldEnumSchema.array(),
        having: ProgramResourceScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramResourceGroupByArgsSchema
