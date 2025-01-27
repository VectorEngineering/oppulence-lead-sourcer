import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractEventCreateManyInputSchema } from '../inputTypeSchemas/ContractEventCreateManyInputSchema'

export const ContractEventCreateManyArgsSchema: z.ZodType<Prisma.ContractEventCreateManyArgs> = z
    .object({
        data: z.union([ContractEventCreateManyInputSchema, ContractEventCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractEventCreateManyArgsSchema
