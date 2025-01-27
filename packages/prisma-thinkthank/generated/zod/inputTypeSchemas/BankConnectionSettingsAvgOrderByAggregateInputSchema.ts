import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankConnectionSettingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BankConnectionSettingsAvgOrderByAggregateInput> = z.object({
  syncDayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  syncDayOfMonth: z.lazy(() => SortOrderSchema).optional(),
  connectionTimeout: z.lazy(() => SortOrderSchema).optional(),
  readTimeout: z.lazy(() => SortOrderSchema).optional(),
  maxRequestsPerHour: z.lazy(() => SortOrderSchema).optional(),
  maxConcurrentRequests: z.lazy(() => SortOrderSchema).optional(),
  historicalDays: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankConnectionSettingsAvgOrderByAggregateInputSchema;
