import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ApprovalStatusSchema } from './ApprovalStatusSchema'

export const NestedEnumApprovalStatusFilterSchema: z.ZodType<Prisma.NestedEnumApprovalStatusFilter> = z
    .object({
        equals: z.lazy(() => ApprovalStatusSchema).optional(),
        in: z
            .lazy(() => ApprovalStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => ApprovalStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => ApprovalStatusSchema), z.lazy(() => NestedEnumApprovalStatusFilterSchema)]).optional()
    })
    .strict()

export default NestedEnumApprovalStatusFilterSchema
