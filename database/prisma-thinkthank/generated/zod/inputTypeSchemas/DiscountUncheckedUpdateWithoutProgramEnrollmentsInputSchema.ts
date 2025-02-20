import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema'
import { CommissionTypeSchema } from './CommissionTypeSchema'
import { EnumCommissionTypeFieldUpdateOperationsInputSchema } from './EnumCommissionTypeFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'
import { NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema } from './NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProgramEnrollmentsInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
            type: z
                .union([z.lazy(() => CommissionTypeSchema), z.lazy(() => EnumCommissionTypeFieldUpdateOperationsInputSchema)])
                .optional(),
            duration: z
                .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            interval: z
                .union([
                    z.lazy(() => CommissionIntervalSchema),
                    z.lazy(() => NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema)
                ])
                .optional()
                .nullable(),
            couponId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            couponTestId: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            workspaceId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            programId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
        })
        .strict()

export default DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema
