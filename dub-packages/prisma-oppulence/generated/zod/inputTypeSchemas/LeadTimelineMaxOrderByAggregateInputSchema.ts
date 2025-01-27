import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadTimelineMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadTimelineMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  milestone: z.lazy(() => SortOrderSchema).optional(),
  targetDate: z.lazy(() => SortOrderSchema).optional(),
  actualDate: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadTimelineMaxOrderByAggregateInputSchema;
