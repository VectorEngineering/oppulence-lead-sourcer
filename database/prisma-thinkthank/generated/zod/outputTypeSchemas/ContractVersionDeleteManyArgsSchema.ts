import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractVersionWhereInputSchema } from '../inputTypeSchemas/ContractVersionWhereInputSchema'

export const ContractVersionDeleteManyArgsSchema: z.ZodType<Prisma.ContractVersionDeleteManyArgs> = z
    .object({
        where: ContractVersionWhereInputSchema.optional()
    })
    .strict()

export default ContractVersionDeleteManyArgsSchema
