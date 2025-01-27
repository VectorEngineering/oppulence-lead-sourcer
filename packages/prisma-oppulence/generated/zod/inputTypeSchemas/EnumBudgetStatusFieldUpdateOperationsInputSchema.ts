import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { BudgetStatusSchema } from './BudgetStatusSchema'

export const EnumBudgetStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBudgetStatusFieldUpdateOperationsInput> = z
    .object({
        set: z.lazy(() => BudgetStatusSchema).optional()
    })
    .strict()

export default EnumBudgetStatusFieldUpdateOperationsInputSchema
