import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadTouchpointMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadTouchpointMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  channel: z.lazy(() => SortOrderSchema).optional(),
  campaign: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  interaction: z.lazy(() => SortOrderSchema).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  isFirstTouch: z.lazy(() => SortOrderSchema).optional(),
  isLastTouch: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadTouchpointMinOrderByAggregateInputSchema;
