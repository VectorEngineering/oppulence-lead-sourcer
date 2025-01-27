import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealStatusSchema } from './DealStatusSchema'

export const EnumDealStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumDealStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => DealStatusSchema).optional()
    })
    .strict()

export default EnumDealStatusFieldUpdateOperationsInputSchema
