import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccessOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReportAccessOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportAccessOrderByRelationAggregateInputSchema;
