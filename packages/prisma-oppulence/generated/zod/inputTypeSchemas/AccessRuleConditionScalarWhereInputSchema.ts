import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'

export const AccessRuleConditionScalarWhereInputSchema: z.ZodType<Prisma.AccessRuleConditionScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => AccessRuleConditionScalarWhereInputSchema),
                z.lazy(() => AccessRuleConditionScalarWhereInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => AccessRuleConditionScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AccessRuleConditionScalarWhereInputSchema),
                z.lazy(() => AccessRuleConditionScalarWhereInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        ruleId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        operator: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional()
    })
    .strict()

export default AccessRuleConditionScalarWhereInputSchema
