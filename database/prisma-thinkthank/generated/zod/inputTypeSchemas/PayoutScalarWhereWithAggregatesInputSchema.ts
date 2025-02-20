import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { EnumPayoutStatusWithAggregatesFilterSchema } from './EnumPayoutStatusWithAggregatesFilterSchema'
import { PayoutStatusSchema } from './PayoutStatusSchema'
import { EnumPayoutTypeWithAggregatesFilterSchema } from './EnumPayoutTypeWithAggregatesFilterSchema'
import { PayoutTypeSchema } from './PayoutTypeSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const PayoutScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PayoutScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => PayoutScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PayoutScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => PayoutScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => PayoutScalarWhereWithAggregatesInputSchema),
                z.lazy(() => PayoutScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        partnerId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        invoiceId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        amount: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        currency: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        status: z.union([z.lazy(() => EnumPayoutStatusWithAggregatesFilterSchema), z.lazy(() => PayoutStatusSchema)]).optional(),
        type: z.union([z.lazy(() => EnumPayoutTypeWithAggregatesFilterSchema), z.lazy(() => PayoutTypeSchema)]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        periodStart: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        periodEnd: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        quantity: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        stripeTransferId: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        paidAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable()
    })
    .strict()

export default PayoutScalarWhereWithAggregatesInputSchema
