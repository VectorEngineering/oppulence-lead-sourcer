import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadBudgetMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadBudgetMaxOrderByAggregateInput> = z.object({
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
  status: z.lazy(() => SortOrderSchema).optional(),
  approvalStatus: z.lazy(() => SortOrderSchema).optional(),
  approvedBy: z.lazy(() => SortOrderSchema).optional(),
  approvedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadBudgetMaxOrderByAggregateInputSchema;
