import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BankAccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.BankAccountSumOrderByAggregateInput> = z.object({
  balance: z.lazy(() => SortOrderSchema).optional(),
  baseBalance: z.lazy(() => SortOrderSchema).optional(),
  availableBalance: z.lazy(() => SortOrderSchema).optional(),
  pendingBalance: z.lazy(() => SortOrderSchema).optional(),
  creditLimit: z.lazy(() => SortOrderSchema).optional(),
  minBalance: z.lazy(() => SortOrderSchema).optional(),
  targetBalance: z.lazy(() => SortOrderSchema).optional(),
  overdraftLimit: z.lazy(() => SortOrderSchema).optional(),
  interestRate: z.lazy(() => SortOrderSchema).optional(),
  exchangeRate: z.lazy(() => SortOrderSchema).optional(),
  spendingLimit: z.lazy(() => SortOrderSchema).optional(),
  dailyLimit: z.lazy(() => SortOrderSchema).optional(),
  monthlyLimit: z.lazy(() => SortOrderSchema).optional(),
  approvalThreshold: z.lazy(() => SortOrderSchema).optional(),
  errorRetries: z.lazy(() => SortOrderSchema).optional(),
  errorCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BankAccountSumOrderByAggregateInputSchema;
