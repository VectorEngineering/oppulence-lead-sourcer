import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'

export const InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInput> =
    z
        .object({
            id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
            changes: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
            createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
            createdBy: z
                .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
                .optional()
                .nullable()
        })
        .strict()

export default InvoiceHistoryUncheckedUpdateManyWithoutInvoiceInputSchema
