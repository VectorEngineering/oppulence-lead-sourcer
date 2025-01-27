import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ContractApprovalMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContractApprovalMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        contractId: z.lazy(() => SortOrderSchema).optional(),
        stage: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        approverRole: z.lazy(() => SortOrderSchema).optional(),
        approverId: z.lazy(() => SortOrderSchema).optional(),
        comments: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ContractApprovalMaxOrderByAggregateInputSchema
