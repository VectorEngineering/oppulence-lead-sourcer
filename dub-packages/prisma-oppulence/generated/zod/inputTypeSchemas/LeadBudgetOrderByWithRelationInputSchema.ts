import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadBudgetRevisionOrderByRelationAggregateInputSchema } from './LeadBudgetRevisionOrderByRelationAggregateInputSchema';
import { LeadBudgetExpenseOrderByRelationAggregateInputSchema } from './LeadBudgetExpenseOrderByRelationAggregateInputSchema';
import { LeadBudgetOrderByRelevanceInputSchema } from './LeadBudgetOrderByRelevanceInputSchema';

export const LeadBudgetOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadBudgetOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  totalBudget: z.lazy(() => SortOrderSchema).optional(),
  allocatedBudget: z.lazy(() => SortOrderSchema).optional(),
  remainingBudget: z.lazy(() => SortOrderSchema).optional(),
  spentBudget: z.lazy(() => SortOrderSchema).optional(),
  productCost: z.lazy(() => SortOrderSchema).optional(),
  serviceCost: z.lazy(() => SortOrderSchema).optional(),
  implementationCost: z.lazy(() => SortOrderSchema).optional(),
  maintenanceCost: z.lazy(() => SortOrderSchema).optional(),
  fiscalYear: z.lazy(() => SortOrderSchema).optional(),
  quarterlyBreakdown: z.lazy(() => SortOrderSchema).optional(),
  monthlyBreakdown: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  approvalStatus: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  approvedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  revisions: z.lazy(() => LeadBudgetRevisionOrderByRelationAggregateInputSchema).optional(),
  expenses: z.lazy(() => LeadBudgetExpenseOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadBudgetOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadBudgetOrderByWithRelationInputSchema;
