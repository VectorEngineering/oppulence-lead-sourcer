import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ContractEventCountOrderByAggregateInputSchema } from './ContractEventCountOrderByAggregateInputSchema'
import { ContractEventMaxOrderByAggregateInputSchema } from './ContractEventMaxOrderByAggregateInputSchema'
import { ContractEventMinOrderByAggregateInputSchema } from './ContractEventMinOrderByAggregateInputSchema'

export const ContractEventOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContractEventOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        contractId: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        dueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        completedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        _count: z.lazy(() => ContractEventCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ContractEventMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ContractEventMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ContractEventOrderByWithAggregationInputSchema
