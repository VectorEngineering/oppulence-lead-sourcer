import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema'

export const NullableEnumDealTaskPriorityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDealTaskPriorityFieldUpdateOperationsInput> =
    z
        .object({
            set: z
                .lazy(() => DealTaskPrioritySchema)
                .optional()
                .nullable()
        })
        .strict()

export default NullableEnumDealTaskPriorityFieldUpdateOperationsInputSchema
