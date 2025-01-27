import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationConditionWhereInputSchema } from '../inputTypeSchemas/AutomationConditionWhereInputSchema'
import { AutomationConditionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AutomationConditionOrderByWithAggregationInputSchema'
import { AutomationConditionScalarFieldEnumSchema } from '../inputTypeSchemas/AutomationConditionScalarFieldEnumSchema'
import { AutomationConditionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AutomationConditionScalarWhereWithAggregatesInputSchema'

export const AutomationConditionGroupByArgsSchema: z.ZodType<Prisma.AutomationConditionGroupByArgs> = z
    .object({
        where: AutomationConditionWhereInputSchema.optional(),
        orderBy: z
            .union([AutomationConditionOrderByWithAggregationInputSchema.array(), AutomationConditionOrderByWithAggregationInputSchema])
            .optional(),
        by: AutomationConditionScalarFieldEnumSchema.array(),
        having: AutomationConditionScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default AutomationConditionGroupByArgsSchema
