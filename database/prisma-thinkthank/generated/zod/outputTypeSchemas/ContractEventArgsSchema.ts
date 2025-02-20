import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractEventSelectSchema } from '../inputTypeSchemas/ContractEventSelectSchema'
import { ContractEventIncludeSchema } from '../inputTypeSchemas/ContractEventIncludeSchema'

export const ContractEventArgsSchema: z.ZodType<Prisma.ContractEventDefaultArgs> = z
    .object({
        select: z.lazy(() => ContractEventSelectSchema).optional(),
        include: z.lazy(() => ContractEventIncludeSchema).optional()
    })
    .strict()

export default ContractEventArgsSchema
