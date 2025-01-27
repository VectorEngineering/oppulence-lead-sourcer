import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractEventWhereInputSchema } from '../inputTypeSchemas/ContractEventWhereInputSchema'

export const ContractEventDeleteManyArgsSchema: z.ZodType<Prisma.ContractEventDeleteManyArgs> = z
    .object({
        where: ContractEventWhereInputSchema.optional()
    })
    .strict()

export default ContractEventDeleteManyArgsSchema
