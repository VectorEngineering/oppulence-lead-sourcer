import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ContractWhereInputSchema } from './ContractWhereInputSchema'

export const ContractRelationFilterSchema: z.ZodType<Prisma.ContractRelationFilter> = z
    .object({
        is: z.lazy(() => ContractWhereInputSchema).optional(),
        isNot: z.lazy(() => ContractWhereInputSchema).optional()
    })
    .strict()

export default ContractRelationFilterSchema
