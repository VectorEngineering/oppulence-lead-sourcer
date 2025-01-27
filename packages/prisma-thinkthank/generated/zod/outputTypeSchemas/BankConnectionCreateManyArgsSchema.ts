import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { BankConnectionCreateManyInputSchema } from '../inputTypeSchemas/BankConnectionCreateManyInputSchema'

export const BankConnectionCreateManyArgsSchema: z.ZodType<Prisma.BankConnectionCreateManyArgs> = z
    .object({
        data: z.union([BankConnectionCreateManyInputSchema, BankConnectionCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default BankConnectionCreateManyArgsSchema
