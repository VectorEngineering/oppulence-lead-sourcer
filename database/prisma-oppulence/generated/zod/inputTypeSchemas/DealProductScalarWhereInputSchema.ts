import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { FloatFilterSchema } from './FloatFilterSchema'
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DealProductScalarWhereInputSchema: z.ZodType<Prisma.DealProductScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DealProductScalarWhereInputSchema), z.lazy(() => DealProductScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DealProductScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DealProductScalarWhereInputSchema), z.lazy(() => DealProductScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        productId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        quantity: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        unitPrice: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        discount: z
            .union([z.lazy(() => FloatNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        total: z.union([z.lazy(() => FloatFilterSchema), z.number()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional()
    })
    .strict()

export default DealProductScalarWhereInputSchema
