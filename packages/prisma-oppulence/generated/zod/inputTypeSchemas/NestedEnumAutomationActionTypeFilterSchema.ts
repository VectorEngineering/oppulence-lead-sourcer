import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema'

export const NestedEnumAutomationActionTypeFilterSchema: z.ZodType<Prisma.NestedEnumAutomationActionTypeFilter> = z
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

export default NestedEnumAutomationActionTypeFilterSchema
