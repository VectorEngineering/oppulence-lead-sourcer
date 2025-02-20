import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountSubTypeSchema } from './AccountSubTypeSchema'

export const NullableEnumAccountSubTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumAccountSubTypeFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => AccountSubTypeSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumAccountSubTypeFieldUpdateOperationsInputSchema
