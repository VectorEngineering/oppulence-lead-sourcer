import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankConnectionAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BankConnectionAvgOrderByAggregateInput> = z.object({
  errorRetries: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankConnectionAvgOrderByAggregateInputSchema;
