import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InvoiceHistoryWhereInputSchema } from './InvoiceHistoryWhereInputSchema'
import { StringFilterSchema } from './StringFilterSchema'
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { InvoiceRelationFilterSchema } from './InvoiceRelationFilterSchema'
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema'

export const InvoiceHistoryWhereUniqueInputSchema: z.ZodType<Prisma.InvoiceHistoryWhereUniqueInput> = z
    .object({
        id: z.string().cuid()
    })
    .and(
        z
            .object({
                id: z.string().cuid().optional(),
                AND: z
                    .union([z.lazy(() => InvoiceHistoryWhereInputSchema), z.lazy(() => InvoiceHistoryWhereInputSchema).array()])
                    .optional(),
                OR: z
                    .lazy(() => InvoiceHistoryWhereInputSchema)
                    .array()
                    .optional(),
                NOT: z
                    .union([z.lazy(() => InvoiceHistoryWhereInputSchema), z.lazy(() => InvoiceHistoryWhereInputSchema).array()])
                    .optional(),
                invoiceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                action: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                description: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
                changes: z.lazy(() => JsonNullableFilterSchema).optional(),
                metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
                createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
                createdBy: z
                    .union([z.lazy(() => StringNullableFilterSchema), z.string()])
                    .optional()
                    .nullable(),
                invoice: z.union([z.lazy(() => InvoiceRelationFilterSchema), z.lazy(() => InvoiceWhereInputSchema)]).optional()
            })
            .strict()
    )

export default InvoiceHistoryWhereUniqueInputSchema
