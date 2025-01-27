import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFilterSchema } from './StringFilterSchema'
import { IntFilterSchema } from './IntFilterSchema'
import { EnumCommissionTypeFilterSchema } from './EnumCommissionTypeFilterSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { IntNullableFilterSchema } from './IntNullableFilterSchema'
import { EnumCommissionIntervalNullableFilterSchema } from './EnumCommissionIntervalNullableFilterSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { StringNullableFilterSchema } from './StringNullableFilterSchema'
import { DateTimeFilterSchema } from './DateTimeFilterSchema'
import { ProgramRelationFilterSchema } from './ProgramRelationFilterSchema'
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema'
import { ProgramEnrollmentListRelationFilterSchema } from './ProgramEnrollmentListRelationFilterSchema'

export const DiscountWhereInputSchema: z.ZodType<Prisma.DiscountWhereInput> = z
    .object({
        AND: z.union([z.lazy(() => DiscountWhereInputSchema), z.lazy(() => DiscountWhereInputSchema).array()]).optional(),
        OR: z
            .lazy(() => DiscountWhereInputSchema)
            .array()
            .optional(),
        NOT: z.union([z.lazy(() => DiscountWhereInputSchema), z.lazy(() => DiscountWhereInputSchema).array()]).optional(),
        id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        amount: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
        type: z.union([z.lazy(() => EnumCommissionTypeFilterSchema), z.lazy(() => CommissionTypeSchema)]).optional(),
        duration: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number()])
            .optional()
            .nullable(),
        interval: z
            .union([z.lazy(() => EnumCommissionIntervalNullableFilterSchema), z.lazy(() => CommissionIntervalSchema)])
            .optional()
            .nullable(),
        couponId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        couponTestId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
        workspaceId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        programId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
        createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        updatedAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
        program: z.union([z.lazy(() => ProgramRelationFilterSchema), z.lazy(() => ProgramWhereInputSchema)]).optional(),
        programEnrollments: z.lazy(() => ProgramEnrollmentListRelationFilterSchema).optional()
    })
    .strict()

export default DiscountWhereInputSchema
