import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const AccessRuleConditionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccessRuleConditionScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => AccessRuleConditionScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AccessRuleConditionScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => AccessRuleConditionScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => AccessRuleConditionScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AccessRuleConditionScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            ruleId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            operator: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
        })
        .strict()

export default AccessRuleConditionScalarWhereWithAggregatesInputSchema
