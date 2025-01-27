import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractVersionCreateManyInputSchema } from '../inputTypeSchemas/ContractVersionCreateManyInputSchema'

export const ContractVersionCreateManyArgsSchema: z.ZodType<Prisma.ContractVersionCreateManyArgs> = z
    .object({
        data: z.union([ContractVersionCreateManyInputSchema, ContractVersionCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractVersionCreateManyArgsSchema
