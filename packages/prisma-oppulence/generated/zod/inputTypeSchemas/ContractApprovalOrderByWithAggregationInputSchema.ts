import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ContractApprovalCountOrderByAggregateInputSchema } from './ContractApprovalCountOrderByAggregateInputSchema'
import { ContractApprovalMaxOrderByAggregateInputSchema } from './ContractApprovalMaxOrderByAggregateInputSchema'
import { ContractApprovalMinOrderByAggregateInputSchema } from './ContractApprovalMinOrderByAggregateInputSchema'

export const ContractApprovalOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContractApprovalOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        contractId: z.lazy(() => SortOrderSchema).optional(),
        stage: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        approverRole: z.lazy(() => SortOrderSchema).optional(),
        approverId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        comments: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => ContractApprovalCountOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => ContractApprovalMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => ContractApprovalMinOrderByAggregateInputSchema).optional()
    })
    .strict()

export default ContractApprovalOrderByWithAggregationInputSchema
