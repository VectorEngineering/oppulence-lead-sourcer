import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractDocumentCreateManyInputSchema } from '../inputTypeSchemas/ContractDocumentCreateManyInputSchema'

export const ContractDocumentCreateManyArgsSchema: z.ZodType<Prisma.ContractDocumentCreateManyArgs> = z
    .object({
        data: z.union([ContractDocumentCreateManyInputSchema, ContractDocumentCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractDocumentCreateManyArgsSchema
