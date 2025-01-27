import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LogPostTypeSchema } from './LogPostTypeSchema'

export const NullableEnumLogPostTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumLogPostTypeFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => LogPostTypeSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumLogPostTypeFieldUpdateOperationsInputSchema
