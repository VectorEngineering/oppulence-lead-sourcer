import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema'
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema'
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const DealProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DealProductScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => DealProductScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealProductScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => DealProductScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => DealProductScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealProductScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        productId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        quantity: z.union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()]).optional(),
        unitPrice: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
        discount: z
            .union([z.lazy(() => FloatNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        total: z.union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default DealProductScalarWhereWithAggregatesInputSchema
