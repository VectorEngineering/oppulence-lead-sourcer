import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContractAvgOrderByAggregateInput> = z
    .object({
        version: z.lazy(() => SortOrderSchema).optional(),
        value: z.lazy(() => SortOrderSchema).optional(),
        terminationFee: z.lazy(() => SortOrderSchema).optional(),
        limitationOfLiability: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractAvgOrderByAggregateInputSchema
