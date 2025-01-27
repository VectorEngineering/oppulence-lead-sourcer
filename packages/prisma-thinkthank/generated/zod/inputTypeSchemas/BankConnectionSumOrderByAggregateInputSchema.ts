import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankConnectionSumOrderByAggregateInputSchema: z.ZodType<Prisma.BankConnectionSumOrderByAggregateInput> = z.object({
  errorRetries: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankConnectionSumOrderByAggregateInputSchema;
