import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ContractOrderByWithRelationInputSchema } from './ContractOrderByWithRelationInputSchema';
import { ContractEventOrderByRelevanceInputSchema } from './ContractEventOrderByRelevanceInputSchema';

export const ContractEventOrderByWithRelationInputSchema: z.ZodType<Prisma.ContractEventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  contractId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  dueDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  contract: z.lazy(() => ContractOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => ContractEventOrderByRelevanceInputSchema).optional()
}).strict();

export default ContractEventOrderByWithRelationInputSchema;
