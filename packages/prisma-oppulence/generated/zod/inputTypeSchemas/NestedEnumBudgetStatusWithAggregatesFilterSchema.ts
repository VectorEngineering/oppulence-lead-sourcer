import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BudgetStatusSchema } from './BudgetStatusSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumBudgetStatusFilterSchema } from './NestedEnumBudgetStatusFilterSchema'

export const NestedEnumBudgetStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBudgetStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => BudgetStatusSchema).optional(),
        in: z
            .lazy(() => BudgetStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => BudgetStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => BudgetStatusSchema), z.lazy(() => NestedEnumBudgetStatusWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumBudgetStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumBudgetStatusFilterSchema).optional()
    })
    .strict()

export default NestedEnumBudgetStatusWithAggregatesFilterSchema
