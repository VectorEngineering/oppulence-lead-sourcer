import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractEventOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContractEventOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractEventOrderByRelationAggregateInputSchema
