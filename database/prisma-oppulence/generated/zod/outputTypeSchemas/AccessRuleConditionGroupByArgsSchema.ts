import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AccessRuleConditionWhereInputSchema } from '../inputTypeSchemas/AccessRuleConditionWhereInputSchema'
import { AccessRuleConditionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AccessRuleConditionOrderByWithAggregationInputSchema'
import { AccessRuleConditionScalarFieldEnumSchema } from '../inputTypeSchemas/AccessRuleConditionScalarFieldEnumSchema'
import { AccessRuleConditionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AccessRuleConditionScalarWhereWithAggregatesInputSchema'

export const AccessRuleConditionGroupByArgsSchema: z.ZodType<Prisma.AccessRuleConditionGroupByArgs> = z
    .object({
        where: AccessRuleConditionWhereInputSchema.optional(),
        orderBy: z
            .union([AccessRuleConditionOrderByWithAggregationInputSchema.array(), AccessRuleConditionOrderByWithAggregationInputSchema])
            .optional(),
        by: AccessRuleConditionScalarFieldEnumSchema.array(),
        having: AccessRuleConditionScalarWhereWithAggregatesInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default AccessRuleConditionGroupByArgsSchema
