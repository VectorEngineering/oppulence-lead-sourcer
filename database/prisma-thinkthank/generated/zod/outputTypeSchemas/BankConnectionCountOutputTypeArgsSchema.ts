import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionCountOutputTypeSelectSchema } from './BankConnectionCountOutputTypeSelectSchema'

export const BankConnectionCountOutputTypeArgsSchema: z.ZodType<Prisma.BankConnectionCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => BankConnectionCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default BankConnectionCountOutputTypeSelectSchema
