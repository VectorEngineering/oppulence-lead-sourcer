import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const FinancialSettingsSumOrderByAggregateInputSchema: z.ZodType<Prisma.FinancialSettingsSumOrderByAggregateInput> = z.object({
  minTxnAmount: z.lazy(() => SortOrderSchema).optional(),
  maxTxnAmount: z.lazy(() => SortOrderSchema).optional(),
  largeTransactionThreshold: z.lazy(() => SortOrderSchema).optional(),
  lowBalanceThreshold: z.lazy(() => SortOrderSchema).optional(),
  reconciliationWindow: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default FinancialSettingsSumOrderByAggregateInputSchema;
