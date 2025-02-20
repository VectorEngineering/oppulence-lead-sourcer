import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { CommissionTypeSchema } from './CommissionTypeSchema'

export const EnumCommissionTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCommissionTypeFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => CommissionTypeSchema).optional()
    })
    .strict()

export default EnumCommissionTypeFieldUpdateOperationsInputSchema
