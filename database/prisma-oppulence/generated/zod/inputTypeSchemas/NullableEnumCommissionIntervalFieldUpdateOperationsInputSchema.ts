import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionIntervalSchema } from './CommissionIntervalSchema'

export const NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumCommissionIntervalFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => CommissionIntervalSchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumCommissionIntervalFieldUpdateOperationsInputSchema
