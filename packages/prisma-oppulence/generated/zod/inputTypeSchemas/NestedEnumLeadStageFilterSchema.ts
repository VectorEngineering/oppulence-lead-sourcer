import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadStageSchema } from './LeadStageSchema'

export const NestedEnumLeadStageFilterSchema: z.ZodType<Prisma.NestedEnumLeadStageFilter> = z
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

export default NestedEnumLeadStageFilterSchema
