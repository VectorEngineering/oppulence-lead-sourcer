import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractWhereInputSchema } from '../inputTypeSchemas/ContractWhereInputSchema'

export const ContractDeleteManyArgsSchema: z.ZodType<Prisma.ContractDeleteManyArgs> = z
    .object({
        where: ContractWhereInputSchema.optional()
    })
    .strict()

export default ContractDeleteManyArgsSchema
