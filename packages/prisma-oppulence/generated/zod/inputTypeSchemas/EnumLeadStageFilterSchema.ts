import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadStageSchema } from './LeadStageSchema'
import { NestedEnumLeadStageFilterSchema } from './NestedEnumLeadStageFilterSchema'

export const EnumLeadStageFilterSchema: z.ZodType<Prisma.EnumLeadStageFilter> = z
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
        not: z.union([z.lazy(() => LeadStageSchema), z.lazy(() => NestedEnumLeadStageFilterSchema)]).optional()
    })
    .strict()

export default EnumLeadStageFilterSchema
