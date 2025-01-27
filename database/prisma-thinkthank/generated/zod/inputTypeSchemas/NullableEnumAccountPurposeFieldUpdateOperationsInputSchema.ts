import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AccountPurposeSchema } from './AccountPurposeSchema'

export const NullableEnumAccountPurposeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumAccountPurposeFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => AccountPurposeSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumAccountPurposeFieldUpdateOperationsInputSchema
