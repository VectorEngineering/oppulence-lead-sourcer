import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportScheduleSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportScheduleSumOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  dayOfMonth: z.lazy(() => SortOrderSchema).optional(),
  hour: z.lazy(() => SortOrderSchema).optional(),
  minute: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportScheduleSumOrderByAggregateInputSchema;
