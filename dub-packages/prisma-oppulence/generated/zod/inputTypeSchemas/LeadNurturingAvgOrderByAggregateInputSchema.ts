import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadNurturingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadNurturingAvgOrderByAggregateInput> = z.object({
  engagementScore: z.lazy(() => SortOrderSchema).optional(),
  responseRate: z.lazy(() => SortOrderSchema).optional(),
  currentStep: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadNurturingAvgOrderByAggregateInputSchema;
