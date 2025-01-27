import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'

export const AutomationConditionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AutomationConditionScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(() => AutomationConditionScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AutomationConditionScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            OR: z
                .lazy(() => AutomationConditionScalarWhereWithAggregatesInputSchema)
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(() => AutomationConditionScalarWhereWithAggregatesInputSchema),
                    z.lazy(() => AutomationConditionScalarWhereWithAggregatesInputSchema).array()
                ])
                .optional(),
            id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            automationId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            field: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            operator: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
            value: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional()
        })
        .strict()

export default AutomationConditionScalarWhereWithAggregatesInputSchema
