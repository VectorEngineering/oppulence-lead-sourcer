import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractCountOutputTypeSelectSchema } from './ContractCountOutputTypeSelectSchema'

export const ContractCountOutputTypeArgsSchema: z.ZodType<Prisma.ContractCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => ContractCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default ContractCountOutputTypeSelectSchema
