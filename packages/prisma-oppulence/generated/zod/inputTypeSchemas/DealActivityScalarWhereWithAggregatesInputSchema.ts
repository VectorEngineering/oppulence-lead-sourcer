import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema'
import { EnumDealActivityTypeWithAggregatesFilterSchema } from './EnumDealActivityTypeWithAggregatesFilterSchema'
import { DealActivityTypeSchema } from './DealActivityTypeSchema'
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema'
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema'
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema'
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema'

export const DealActivityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DealActivityScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => DealActivityScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealActivityScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        OR: z
            .lazy(() => DealActivityScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => DealActivityScalarWhereWithAggregatesInputSchema),
                z.lazy(() => DealActivityScalarWhereWithAggregatesInputSchema).array()
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumDealActivityTypeWithAggregatesFilterSchema), z.lazy(() => DealActivityTypeSchema)]).optional(),
        title: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        outcome: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable(),
        duration: z
            .union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
            .optional()
            .nullable(),
        scheduledAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        completedAt: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DealActivityScalarWhereWithAggregatesInputSchema
