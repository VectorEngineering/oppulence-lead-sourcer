import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReportAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReportAvgOrderByAggregateInput> = z.object({
  fileSize: z.lazy(() => SortOrderSchema).optional(),
  pageCount: z.lazy(() => SortOrderSchema).optional(),
  rowCount: z.lazy(() => SortOrderSchema).optional(),
  downloadCount: z.lazy(() => SortOrderSchema).optional(),
  viewCount: z.lazy(() => SortOrderSchema).optional(),
  processingTime: z.lazy(() => SortOrderSchema).optional(),
  retryCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReportAvgOrderByAggregateInputSchema;
