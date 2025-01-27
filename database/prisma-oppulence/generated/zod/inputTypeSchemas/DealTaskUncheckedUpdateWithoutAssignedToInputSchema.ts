import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'
import { NullableEnumDealTaskPriorityFieldUpdateOperationsInputSchema } from './NullableEnumDealTaskPriorityFieldUpdateOperationsInputSchema'
import { DealTaskStatusSchema } from './DealTaskStatusSchema'
import { EnumDealTaskStatusFieldUpdateOperationsInputSchema } from './EnumDealTaskStatusFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const DealTaskUncheckedUpdateWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskUncheckedUpdateWithoutAssignedToInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        dealId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        description: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        dueDate: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        priority: z
            .union([z.lazy(() => DealTaskPrioritySchema), z.lazy(() => NullableEnumDealTaskPriorityFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        status: z.union([z.lazy(() => DealTaskStatusSchema), z.lazy(() => EnumDealTaskStatusFieldUpdateOperationsInputSchema)]).optional(),
        completedAt: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default DealTaskUncheckedUpdateWithoutAssignedToInputSchema
