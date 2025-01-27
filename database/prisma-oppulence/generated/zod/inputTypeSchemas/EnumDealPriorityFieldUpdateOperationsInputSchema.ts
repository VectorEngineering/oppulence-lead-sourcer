import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealPrioritySchema } from './DealPrioritySchema'

export const EnumDealPriorityFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDealPriorityFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => DealPrioritySchema).optional()
    })
    .strict()

export default EnumDealPriorityFieldUpdateOperationsInputSchema
