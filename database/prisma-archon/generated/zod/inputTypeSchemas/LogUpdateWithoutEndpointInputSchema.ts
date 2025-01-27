import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { LogTypeSchema } from './LogTypeSchema'
import { NullableEnumLogTypeFieldUpdateOperationsInputSchema } from './NullableEnumLogTypeFieldUpdateOperationsInputSchema'
import { LogPostTypeSchema } from './LogPostTypeSchema'
import { NullableEnumLogPostTypeFieldUpdateOperationsInputSchema } from './NullableEnumLogPostTypeFieldUpdateOperationsInputSchema'
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LogUpdateWithoutEndpointInputSchema: z.ZodType<Prisma.LogUpdateWithoutEndpointInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        type: z
            .union([z.lazy(() => LogTypeSchema), z.lazy(() => NullableEnumLogTypeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        postType: z
            .union([z.lazy(() => LogPostTypeSchema), z.lazy(() => NullableEnumLogPostTypeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        message: z.union([z.lazy(() => JsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default LogUpdateWithoutEndpointInputSchema
