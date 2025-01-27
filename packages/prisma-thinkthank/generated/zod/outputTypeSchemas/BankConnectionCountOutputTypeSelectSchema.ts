import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const BankConnectionCountOutputTypeSelectSchema: z.ZodType<Prisma.BankConnectionCountOutputTypeSelect> = z
    .object({
        bankAccounts: z.boolean().optional()
    })
    .strict()

export default BankConnectionCountOutputTypeSelectSchema
