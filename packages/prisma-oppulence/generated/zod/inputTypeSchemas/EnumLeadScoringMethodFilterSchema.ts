import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadScoringMethodSchema } from './LeadScoringMethodSchema'
import { NestedEnumLeadScoringMethodFilterSchema } from './NestedEnumLeadScoringMethodFilterSchema'

export const EnumLeadScoringMethodFilterSchema: z.ZodType<Prisma.EnumLeadScoringMethodFilter> = z
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

export default EnumLeadScoringMethodFilterSchema
