import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProgramApplicationWhereInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereInputSchema'
import { ProgramApplicationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramApplicationOrderByWithRelationInputSchema'
import { ProgramApplicationWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereUniqueInputSchema'

export const ProgramApplicationAggregateArgsSchema: z.ZodType<Prisma.ProgramApplicationAggregateArgs> = z
    .object({
        where: ProgramApplicationWhereInputSchema.optional(),
        orderBy: z
            .union([ProgramApplicationOrderByWithRelationInputSchema.array(), ProgramApplicationOrderByWithRelationInputSchema])
            .optional(),
        cursor: ProgramApplicationWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default ProgramApplicationAggregateArgsSchema
