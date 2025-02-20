import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema'
import { NestedEnumInvoiceCommentTypeFilterSchema } from './NestedEnumInvoiceCommentTypeFilterSchema'

export const EnumInvoiceCommentTypeFilterSchema: z.ZodType<Prisma.EnumInvoiceCommentTypeFilter> = z
    .object({
        equals: z.lazy(() => InvoiceCommentTypeSchema).optional(),
        in: z
            .lazy(() => InvoiceCommentTypeSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => InvoiceCommentTypeSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => InvoiceCommentTypeSchema), z.lazy(() => NestedEnumInvoiceCommentTypeFilterSchema)]).optional()
    })
    .strict()

export default EnumInvoiceCommentTypeFilterSchema
