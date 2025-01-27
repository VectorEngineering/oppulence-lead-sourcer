import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSettingsSelectSchema } from '../inputTypeSchemas/BankConnectionSettingsSelectSchema'
import { BankConnectionSettingsIncludeSchema } from '../inputTypeSchemas/BankConnectionSettingsIncludeSchema'

export const BankConnectionSettingsArgsSchema: z.ZodType<Prisma.BankConnectionSettingsDefaultArgs> = z
    .object({
        select: z.lazy(() => BankConnectionSettingsSelectSchema).optional(),
        include: z.lazy(() => BankConnectionSettingsIncludeSchema).optional()
    })
    .strict()

export default BankConnectionSettingsArgsSchema
