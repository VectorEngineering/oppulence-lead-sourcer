import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsCountOutputTypeSelectSchema } from './BankConnectionSettingsCountOutputTypeSelectSchema'

export const BankConnectionSettingsCountOutputTypeArgsSchema: z.ZodType<Prisma.BankConnectionSettingsCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => BankConnectionSettingsCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default BankConnectionSettingsCountOutputTypeSelectSchema
