import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractTemplateCreateManyInputSchema } from '../inputTypeSchemas/ContractTemplateCreateManyInputSchema'

export const ContractTemplateCreateManyArgsSchema: z.ZodType<Prisma.ContractTemplateCreateManyArgs> = z
    .object({
        data: z.union([ContractTemplateCreateManyInputSchema, ContractTemplateCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ContractTemplateCreateManyArgsSchema
