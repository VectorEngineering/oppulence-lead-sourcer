import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadBudgetOrderByWithRelationInputSchema } from './LeadBudgetOrderByWithRelationInputSchema';
import { LeadBudgetRevisionOrderByRelevanceInputSchema } from './LeadBudgetRevisionOrderByRelevanceInputSchema';

export const LeadBudgetRevisionOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadBudgetRevisionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  budgetId: z.lazy(() => SortOrderSchema).optional(),
  previousAmount: z.lazy(() => SortOrderSchema).optional(),
  newAmount: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  budget: z.lazy(() => LeadBudgetOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadBudgetRevisionOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadBudgetRevisionOrderByWithRelationInputSchema;
