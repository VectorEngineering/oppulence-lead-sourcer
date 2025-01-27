import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentCountOutputTypeSelectSchema } from './ContractDocumentCountOutputTypeSelectSchema'

export const ContractDocumentCountOutputTypeArgsSchema: z.ZodType<Prisma.ContractDocumentCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => ContractDocumentCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default ContractDocumentCountOutputTypeSelectSchema
