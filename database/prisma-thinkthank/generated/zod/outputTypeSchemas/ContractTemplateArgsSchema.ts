import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ContractTemplateSelectSchema } from '../inputTypeSchemas/ContractTemplateSelectSchema'
import { ContractTemplateIncludeSchema } from '../inputTypeSchemas/ContractTemplateIncludeSchema'

export const ContractTemplateArgsSchema: z.ZodType<Prisma.ContractTemplateDefaultArgs> = z
    .object({
        select: z.lazy(() => ContractTemplateSelectSchema).optional(),
        include: z.lazy(() => ContractTemplateIncludeSchema).optional()
    })
    .strict()

export default ContractTemplateArgsSchema
