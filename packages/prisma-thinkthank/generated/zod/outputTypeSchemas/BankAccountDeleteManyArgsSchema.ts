import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankAccountWhereInputSchema } from '../inputTypeSchemas/BankAccountWhereInputSchema'

export const BankAccountDeleteManyArgsSchema: z.ZodType<Prisma.BankAccountDeleteManyArgs> = z
    .object({
        where: BankAccountWhereInputSchema.optional()
    })
    .strict()

export default BankAccountDeleteManyArgsSchema
