import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractTemplateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContractTemplateOrderByRelationAggregateInput> = z
    .object({
        _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractTemplateOrderByRelationAggregateInputSchema
