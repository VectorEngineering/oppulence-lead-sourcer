import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadStageSchema } from './LeadStageSchema'
import { NestedEnumLeadStageWithAggregatesFilterSchema } from './NestedEnumLeadStageWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumLeadStageFilterSchema } from './NestedEnumLeadStageFilterSchema'

export const EnumLeadStageWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadStageWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => LeadStageSchema).optional(),
        in: z
            .lazy(() => LeadStageSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => LeadStageSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => LeadStageSchema), z.lazy(() => NestedEnumLeadStageWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumLeadStageFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumLeadStageFilterSchema).optional()
    })
    .strict()

export default EnumLeadStageWithAggregatesFilterSchema
