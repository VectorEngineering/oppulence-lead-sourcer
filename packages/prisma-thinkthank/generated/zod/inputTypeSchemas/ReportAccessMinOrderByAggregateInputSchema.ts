import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAccessMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAccessMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  reportId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  accessType: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportAccessMinOrderByAggregateInputSchema;
