import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InboxAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InboxAvgOrderByAggregateInput> = z.object({
  size: z.lazy(() => SortOrderSchema).optional(),
  sortOrder: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  accessCount: z.lazy(() => SortOrderSchema).optional(),
  maxAccessCount: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  baseAmount: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  totalAmount: z.lazy(() => SortOrderSchema).optional(),
  retryCount: z.lazy(() => SortOrderSchema).optional(),
  maxRetries: z.lazy(() => SortOrderSchema).optional(),
  ocrConfidence: z.lazy(() => SortOrderSchema).optional(),
  version: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default InboxAvgOrderByAggregateInputSchema;
