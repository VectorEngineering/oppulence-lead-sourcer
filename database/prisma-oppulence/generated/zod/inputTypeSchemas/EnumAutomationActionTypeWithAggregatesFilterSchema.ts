import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { NestedEnumAutomationActionTypeWithAggregatesFilterSchema } from './NestedEnumAutomationActionTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumAutomationActionTypeFilterSchema } from './NestedEnumAutomationActionTypeFilterSchema'

export const EnumAutomationActionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAutomationActionTypeWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => AutomationActionTypeSchema).optional(),
        in: z
            .lazy(() => AutomationActionTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => AutomationActionTypeSchema)
            .array()
            .optional(),
        not: z
            .union([z.lazy(() => AutomationActionTypeSchema), z.lazy(() => NestedEnumAutomationActionTypeWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumAutomationActionTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumAutomationActionTypeFilterSchema).optional()
    })
    .strict()

export default EnumAutomationActionTypeWithAggregatesFilterSchema
