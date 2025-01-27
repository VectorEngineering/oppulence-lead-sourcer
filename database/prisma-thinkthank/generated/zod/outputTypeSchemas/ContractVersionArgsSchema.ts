import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractVersionSelectSchema } from '../inputTypeSchemas/ContractVersionSelectSchema'
import { ContractVersionIncludeSchema } from '../inputTypeSchemas/ContractVersionIncludeSchema'

export const ContractVersionArgsSchema: z.ZodType<Prisma.ContractVersionDefaultArgs> = z
    .object({
        select: z.lazy(() => ContractVersionSelectSchema).optional(),
        include: z.lazy(() => ContractVersionIncludeSchema).optional()
    })
    .strict()

export default ContractVersionArgsSchema
