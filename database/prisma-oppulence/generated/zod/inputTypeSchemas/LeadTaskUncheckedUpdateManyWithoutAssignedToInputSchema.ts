import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { TaskStatusSchema } from './TaskStatusSchema'
import { EnumTaskStatusFieldUpdateOperationsInputSchema } from './EnumTaskStatusFieldUpdateOperationsInputSchema'
import { TaskPrioritySchema } from './TaskPrioritySchema'
import { EnumTaskPriorityFieldUpdateOperationsInputSchema } from './EnumTaskPriorityFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LeadTaskUncheckedUpdateManyWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskUncheckedUpdateManyWithoutAssignedToInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            leadId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            description: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            status: z.union([z.lazy(() => TaskStatusSchema), z.lazy(() => EnumTaskStatusFieldUpdateOperationsInputSchema)]).optional(),
            priority: z
                .union([z.lazy(() => TaskPrioritySchema), z.lazy(() => EnumTaskPriorityFieldUpdateOperationsInputSchema)])
                .optional(),
            dueDate: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            completedAt: z
                .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            createdBy: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            updatedBy: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
        })
        .strict()

export default LeadTaskUncheckedUpdateManyWithoutAssignedToInputSchema
