import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionSelectSchema } from '../inputTypeSchemas/BankConnectionSelectSchema'
import { BankConnectionIncludeSchema } from '../inputTypeSchemas/BankConnectionIncludeSchema'

export const BankConnectionArgsSchema: z.ZodType<Prisma.BankConnectionDefaultArgs> = z
    .object({
        select: z.lazy(() => BankConnectionSelectSchema).optional(),
        include: z.lazy(() => BankConnectionIncludeSchema).optional()
    })
    .strict()

export default BankConnectionArgsSchema
