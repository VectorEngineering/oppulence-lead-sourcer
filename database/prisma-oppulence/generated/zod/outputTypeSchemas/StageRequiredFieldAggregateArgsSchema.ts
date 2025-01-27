import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldWhereInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereInputSchema'
import { StageRequiredFieldOrderByWithRelationInputSchema } from '../inputTypeSchemas/StageRequiredFieldOrderByWithRelationInputSchema'
import { StageRequiredFieldWhereUniqueInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereUniqueInputSchema'

export const StageRequiredFieldAggregateArgsSchema: z.ZodType<Prisma.StageRequiredFieldAggregateArgs> = z
    .object({
        where: StageRequiredFieldWhereInputSchema.optional(),
        orderBy: z
            .union([StageRequiredFieldOrderByWithRelationInputSchema.array(), StageRequiredFieldOrderByWithRelationInputSchema])
            .optional(),
        cursor: StageRequiredFieldWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default StageRequiredFieldAggregateArgsSchema
