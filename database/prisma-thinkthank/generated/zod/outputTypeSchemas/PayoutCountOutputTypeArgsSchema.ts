import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { PayoutCountOutputTypeSelectSchema } from './PayoutCountOutputTypeSelectSchema'

export const PayoutCountOutputTypeArgsSchema: z.ZodType<Prisma.PayoutCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => PayoutCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default PayoutCountOutputTypeSelectSchema
