import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceDeliveryTypeSchema } from './InvoiceDeliveryTypeSchema'
import { NestedIntFilterSchema } from './NestedIntFilterSchema'
import { NestedEnumInvoiceDeliveryTypeFilterSchema } from './NestedEnumInvoiceDeliveryTypeFilterSchema'

export const NestedEnumInvoiceDeliveryTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInvoiceDeliveryTypeWithAggregatesFilter> =
    z
        .object({
            equals: z.lazy(() => InvoiceDeliveryTypeSchema).optional(),
            in: z
                .lazy(() => InvoiceDeliveryTypeSchema)
                .array()
                .optional(),
            notIn: z
                .lazy(() => InvoiceDeliveryTypeSchema)
                .array()
                .optional(),
            not: z
                .union([z.lazy(() => InvoiceDeliveryTypeSchema), z.lazy(() => NestedEnumInvoiceDeliveryTypeWithAggregatesFilterSchema)])
                .optional(),
            _count: z.lazy(() => NestedIntFilterSchema).optional(),
            _min: z.lazy(() => NestedEnumInvoiceDeliveryTypeFilterSchema).optional(),
            _max: z.lazy(() => NestedEnumInvoiceDeliveryTypeFilterSchema).optional()
        })
        .strict()

export default NestedEnumInvoiceDeliveryTypeWithAggregatesFilterSchema
