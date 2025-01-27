import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { EnumDealActivityTypeFilterSchema } from './EnumDealActivityTypeFilterSchema'
import { DealActivityTypeSchema } from './DealActivityTypeSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'

export const DealActivityScalarWhereInputSchema: z.ZodType<Prisma.DealActivityScalarWhereInput> = z
    .object({
        AND: z
            .union([z.lazy(() => DealActivityScalarWhereInputSchema), z.lazy(() => DealActivityScalarWhereInputSchema).array()])
            .optional(),
        OR: z
            .lazy(() => DealActivityScalarWhereInputSchema)
            .array()
            .optional(),
        NOT: z
            .union([z.lazy(() => DealActivityScalarWhereInputSchema), z.lazy(() => DealActivityScalarWhereInputSchema).array()])
            .optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        dealId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        type: z.union([z.lazy(() => EnumDealActivityTypeFilterSchema), z.lazy(() => DealActivityTypeSchema)]).optional(),
        title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        description: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        outcome: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        duration: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        scheduledAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        completedAt: z
            .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
            .optional()
            .nullable(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        createdBy: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable()
    })
    .strict()

export default DealActivityScalarWhereInputSchema
