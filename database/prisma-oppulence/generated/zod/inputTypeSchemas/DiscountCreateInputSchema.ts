import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { ProgramCreateNestedOneWithoutDiscountsInputSchema } from './ProgramCreateNestedOneWithoutDiscountsInputSchema'
import { ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema } from './ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema'

export const DiscountCreateInputSchema: z.ZodType<Prisma.DiscountCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        amount: z.number().int().optional(),
        type: z.lazy(() => CommissionTypeSchema).optional(),
        duration: z.number().int().optional().nullable(),
        interval: z
            .lazy(() => CommissionIntervalSchema)
            .optional()
            .nullable(),
        couponId: z.string().optional().nullable(),
        couponTestId: z.string().optional().nullable(),
        workspaceId: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        program: z.lazy(() => ProgramCreateNestedOneWithoutDiscountsInputSchema),
        programEnrollments: z.lazy(() => ProgramEnrollmentCreateNestedManyWithoutDiscountInputSchema).optional()
    })
    .strict()

export default DiscountCreateInputSchema
