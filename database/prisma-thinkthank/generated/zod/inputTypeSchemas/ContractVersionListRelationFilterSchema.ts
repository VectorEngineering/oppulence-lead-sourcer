import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractVersionWhereInputSchema } from './ContractVersionWhereInputSchema'

export const ContractVersionListRelationFilterSchema: z.ZodType<Prisma.ContractVersionListRelationFilter> = z
    .object({
        every: z.lazy(() => ContractVersionWhereInputSchema).optional(),
        some: z.lazy(() => ContractVersionWhereInputSchema).optional(),
        none: z.lazy(() => ContractVersionWhereInputSchema).optional()
    })
    .strict()

export default ContractVersionListRelationFilterSchema
