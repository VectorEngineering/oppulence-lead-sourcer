import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportFilterAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportFilterAvgOrderByAggregateInput> = z.object({
  position: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportFilterAvgOrderByAggregateInputSchema;
