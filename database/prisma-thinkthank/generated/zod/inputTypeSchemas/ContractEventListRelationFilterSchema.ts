import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractEventWhereInputSchema } from './ContractEventWhereInputSchema'

export const ContractEventListRelationFilterSchema: z.ZodType<Prisma.ContractEventListRelationFilter> = z
    .object({
        every: z.lazy(() => ContractEventWhereInputSchema).optional(),
        some: z.lazy(() => ContractEventWhereInputSchema).optional(),
        none: z.lazy(() => ContractEventWhereInputSchema).optional()
    })
    .strict()

export default ContractEventListRelationFilterSchema
