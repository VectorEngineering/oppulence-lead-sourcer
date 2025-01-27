import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractListRelationFilterSchema: z.ZodType<Prisma.ContractListRelationFilter> = z
    .object({
        every: z.lazy(() => ContractWhereInputSchema).optional(),
        some: z.lazy(() => ContractWhereInputSchema).optional(),
        none: z.lazy(() => ContractWhereInputSchema).optional()
    })
    .strict()

export default ContractListRelationFilterSchema
