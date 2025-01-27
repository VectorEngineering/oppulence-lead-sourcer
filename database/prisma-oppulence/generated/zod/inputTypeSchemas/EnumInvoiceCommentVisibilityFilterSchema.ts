import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceCommentVisibilitySchema } from './InvoiceCommentVisibilitySchema'
import { NestedEnumInvoiceCommentVisibilityFilterSchema } from './NestedEnumInvoiceCommentVisibilityFilterSchema'

export const EnumInvoiceCommentVisibilityFilterSchema: z.ZodType<Prisma.EnumInvoiceCommentVisibilityFilter> = z
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
            .union([z.lazy(() => InvoiceCommentVisibilitySchema), z.lazy(() => NestedEnumInvoiceCommentVisibilityFilterSchema)])
            .optional()
    })
    .strict()

export default EnumInvoiceCommentVisibilityFilterSchema
