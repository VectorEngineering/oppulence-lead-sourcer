import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadVerificationStatusSchema } from './LeadVerificationStatusSchema'
import { NestedEnumLeadVerificationStatusFilterSchema } from './NestedEnumLeadVerificationStatusFilterSchema'

export const EnumLeadVerificationStatusFilterSchema: z.ZodType<Prisma.EnumLeadVerificationStatusFilter> = z
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

export default EnumLeadVerificationStatusFilterSchema
