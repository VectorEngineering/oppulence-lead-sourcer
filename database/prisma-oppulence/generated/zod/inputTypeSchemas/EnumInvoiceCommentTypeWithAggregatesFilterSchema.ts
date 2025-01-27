import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentTypeSchema } from './InvoiceCommentTypeSchema'
import { NestedEnumInvoiceCommentTypeWithAggregatesFilterSchema } from './NestedEnumInvoiceCommentTypeWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInvoiceCommentTypeFilterSchema } from './NestedEnumInvoiceCommentTypeFilterSchema'

export const EnumInvoiceCommentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumInvoiceCommentTypeWithAggregatesFilter> = z
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
        not: z
            .union([z.lazy(() => InvoiceCommentTypeSchema), z.lazy(() => NestedEnumInvoiceCommentTypeWithAggregatesFilterSchema)])
            .optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumInvoiceCommentTypeFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumInvoiceCommentTypeFilterSchema).optional()
    })
    .strict()

export default EnumInvoiceCommentTypeWithAggregatesFilterSchema
