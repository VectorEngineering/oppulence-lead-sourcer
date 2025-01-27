import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LeadPersonalDetailsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadPersonalDetailsAvgOrderByAggregateInput> = z.object({
  yearsInRole: z.lazy(() => SortOrderSchema).optional(),
  yearsInCompany: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default LeadPersonalDetailsAvgOrderByAggregateInputSchema;
