import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const PayoutCountOutputTypeSelectSchema: z.ZodType<Prisma.PayoutCountOutputTypeSelect> = z
    .object({
        sales: z.boolean().optional()
    })
    .strict()

export default PayoutCountOutputTypeSelectSchema
