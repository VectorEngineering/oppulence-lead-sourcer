import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DealHistoryScalarWhereInputSchema: z.ZodType<Prisma.DealHistoryScalarWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DealHistoryScalarWhereInputSchema), z.lazy(() => DealHistoryScalarWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DealHistoryScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DealHistoryScalarWhereInputSchema), z.lazy(() => DealHistoryScalarWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        field: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        oldValue: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        newValue: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DealHistoryScalarWhereInputSchema
