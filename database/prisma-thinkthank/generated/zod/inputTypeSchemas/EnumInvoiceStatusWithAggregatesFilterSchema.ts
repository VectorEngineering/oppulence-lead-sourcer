import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceStatusSchema } from './InvoiceStatusSchema'
import { NestedEnumInvoiceStatusWithAggregatesFilterSchema } from './NestedEnumInvoiceStatusWithAggregatesFilterSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInvoiceStatusFilterSchema } from './NestedEnumInvoiceStatusFilterSchema'

export const EnumInvoiceStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumInvoiceStatusWithAggregatesFilter> = z
    .object({
        equals: z.lazy(() => InvoiceStatusSchema).optional(),
        in: z
            .lazy(() => InvoiceStatusSchema)
            .array()
            .optional(),
        notIn: z
            .lazy(() => InvoiceStatusSchema)
            .array()
            .optional(),
        not: z.union([z.lazy(() => InvoiceStatusSchema), z.lazy(() => NestedEnumInvoiceStatusWithAggregatesFilterSchema)]).optional(),
        _count: z.lazy(() => NestedIntFilterSchema).optional(),
        _min: z.lazy(() => NestedEnumInvoiceStatusFilterSchema).optional(),
        _max: z.lazy(() => NestedEnumInvoiceStatusFilterSchema).optional()
    })
    .strict()

export default EnumInvoiceStatusWithAggregatesFilterSchema
