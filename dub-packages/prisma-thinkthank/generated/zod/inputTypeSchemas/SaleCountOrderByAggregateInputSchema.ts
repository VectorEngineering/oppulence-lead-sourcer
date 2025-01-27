import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SaleCountOrderByAggregateInputSchema: z.ZodType<Prisma.SaleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  payoutId: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  clickId: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  paymentProcessor: z.lazy(() => SortOrderSchema).optional(),
  earnings: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.lazy(() => SortOrderSchema).optional(),
  commissionAmount: z.lazy(() => SortOrderSchema).optional(),
  commissionType: z.lazy(() => SortOrderSchema).optional(),
  recurringCommission: z.lazy(() => SortOrderSchema).optional(),
  recurringInterval: z.lazy(() => SortOrderSchema).optional(),
  recurringDuration: z.lazy(() => SortOrderSchema).optional(),
  isLifetimeRecurring: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SaleCountOrderByAggregateInputSchema;
