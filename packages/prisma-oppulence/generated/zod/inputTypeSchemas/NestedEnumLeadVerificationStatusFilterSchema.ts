import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'

export const NestedEnumLeadVerificationStatusFilterSchema: z.ZodType<Prisma.NestedEnumLeadVerificationStatusFilter> = z
    .object({
        equals: z.lazy(() => LeadVerificationStatusSchema).optional(),
        in: z
            .lazy(() => LeadVerificationStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => LeadVerificationStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => LeadVerificationStatusSchema), z.lazy(() => NestedEnumLeadVerificationStatusFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumLeadVerificationStatusFilterSchema
