import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ContractOrderByWithRelationInputSchema } from './ContractOrderByWithRelationInputSchema';
import { ContractApprovalOrderByRelevanceInputSchema } from './ContractApprovalOrderByRelevanceInputSchema';

export const ContractApprovalOrderByWithRelationInputSchema: z.ZodType<Prisma.ContractApprovalOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  contractId: z.lazy(() => SortOrderSchema).optional(),
  stage: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  approverRole: z.lazy(() => SortOrderSchema).optional(),
  approverId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  contract: z.lazy(() => ContractOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ContractApprovalOrderByRelevanceInputSchema).optional()
}).strict();

export default ContractApprovalOrderByWithRelationInputSchema;
