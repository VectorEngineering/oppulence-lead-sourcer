import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInvoiceCommentVisibilityFilterSchema } from './NestedEnumInvoiceCommentVisibilityFilterSchema'

export const NestedEnumInvoiceCommentVisibilityWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInvoiceCommentVisibilityWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => InvoiceCommentVisibilitySchema).optional(),
            in: z
                .lazy(() => InvoiceCommentVisibilitySchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => InvoiceCommentVisibilitySchema)
                .array()
                .optional(),
            not: z
                .union([
                    z.lazy(() => InvoiceCommentVisibilitySchema),
                    z.lazy(() => NestedEnumInvoiceCommentVisibilityWithAggregatesFilterSchema)
                ])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumInvoiceCommentVisibilityFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumInvoiceCommentVisibilityFilterSchema).optional()
        })
        .strict()

export default NestedEnumInvoiceCommentVisibilityWithAggregatesFilterSchema
