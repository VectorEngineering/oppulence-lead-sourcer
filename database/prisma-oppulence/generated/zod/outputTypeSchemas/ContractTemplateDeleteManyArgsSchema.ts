import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractTemplateWhereInputSchema } from '../inputTypeSchemas/ContractTemplateWhereInputSchema'

export const ContractTemplateDeleteManyArgsSchema: z.ZodType<Prisma.ContractTemplateDeleteManyArgs> = z
    .object({
        where: ContractTemplateWhereInputSchema.optional()
    })
    .strict()

export default ContractTemplateDeleteManyArgsSchema
