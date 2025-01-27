import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema'

export const NestedEnumLeadScoringMethodFilterSchema: z.ZodType<Prisma.NestedEnumLeadScoringMethodFilter> = z
    .object({
        equals: z.lazy(() => LeadScoringMethodSchema).optional(),
        in: z
            .lazy(() => LeadScoringMethodSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => LeadScoringMethodSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => LeadScoringMethodSchema), z.lazy(() => NestedEnumLeadScoringMethodFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumLeadScoringMethodFilterSchema
