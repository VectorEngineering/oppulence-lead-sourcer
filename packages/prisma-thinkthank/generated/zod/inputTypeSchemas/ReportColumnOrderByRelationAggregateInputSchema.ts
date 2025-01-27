import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportColumnOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportColumnOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportColumnOrderByRelationAggregateInputSchema;
