import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const BankAccountCountOutputTypeSelectSchema: z.ZodType<Prisma.BankAccountCountOutputTypeSelect> = z
    .object({
        tags: z.boolean().optional(),
        transactions: z.boolean().optional()
    })
    .strict()

export default BankAccountCountOutputTypeSelectSchema
