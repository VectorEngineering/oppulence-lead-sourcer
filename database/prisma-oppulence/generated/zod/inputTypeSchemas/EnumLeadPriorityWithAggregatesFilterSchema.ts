import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadPrioritySchema } from './LeadPrioritySchema'
import { NestedEnumLeadPriorityWithAggregatesFilterSchema } from './NestedEnumLeadPriorityWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumLeadPriorityFilterSchema } from './NestedEnumLeadPriorityFilterSchema'

export const EnumLeadPriorityWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadPriorityWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => LeadPrioritySchema).optional(),
        in: z
            .lazy(() => LeadPrioritySchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => LeadPrioritySchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => LeadPrioritySchema), z.lazy(() => NestedEnumLeadPriorityWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumLeadPriorityFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumLeadPriorityFilterSchema).optional()
    })
    .strict()

export default EnumLeadPriorityWithAggregatesFilterSchema
