import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationConditionWhereInputSchema } from '../inputTypeSchemas/AutomationConditionWhereInputSchema'
import { AutomationConditionOrderByWithRelationInputSchema } from '../inputTypeSchemas/AutomationConditionOrderByWithRelationInputSchema'
import { AutomationConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationConditionWhereUniqueInputSchema'

export const AutomationConditionAggregateArgsSchema: z.ZodType<Prisma.AutomationConditionAggregateArgs> = z
    .object({
        where: AutomationConditionWhereInputSchema.optional(),
        orderBy: z
            .union([AutomationConditionOrderByWithRelationInputSchema.array(), AutomationConditionOrderByWithRelationInputSchema])
            .optional(),
        cursor: AutomationConditionWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default AutomationConditionAggregateArgsSchema
