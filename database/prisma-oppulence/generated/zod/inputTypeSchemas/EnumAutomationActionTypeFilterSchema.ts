import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'
import { NestedEnumAutomationActionTypeFilterSchema } from './NestedEnumAutomationActionTypeFilterSchema'

export const EnumAutomationActionTypeFilterSchema: z.ZodType<Prisma.EnumAutomationActionTypeFilter> = z
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
        not: z.union([z.lazy(() => AutomationActionTypeSchema), z.lazy(() => NestedEnumAutomationActionTypeFilterSchema)]).optional()
    })
    .strict()

export default EnumAutomationActionTypeFilterSchema
