import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccessMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccessMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportAccessMaxOrderByAggregateInputSchema;
