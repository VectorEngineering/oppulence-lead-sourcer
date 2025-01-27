import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SaleCountOrderByAggregateInputSchema } from './SaleCountOrderByAggregateInputSchema';
import { SaleAvgOrderByAggregateInputSchema } from './SaleAvgOrderByAggregateInputSchema';
import { SaleMaxOrderByAggregateInputSchema } from './SaleMaxOrderByAggregateInputSchema';
import { SaleMinOrderByAggregateInputSchema } from './SaleMinOrderByAggregateInputSchema';
import { SaleSumOrderByAggregateInputSchema } from './SaleSumOrderByAggregateInputSchema';

export const SaleOrderByWithAggregationInputSchema: z.ZodType<Prisma.SaleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  payoutId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  linkId: z.lazy(() => SortOrderSchema).optional(),
  clickId: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  paymentProcessor: z.lazy(() => SortOrderSchema).optional(),
  earnings: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  metadata: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  commissionAmount: z.lazy(() => SortOrderSchema).optional(),
  commissionType: z.lazy(() => SortOrderSchema).optional(),
  recurringCommission: z.lazy(() => SortOrderSchema).optional(),
  recurringInterval: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  recurringDuration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isLifetimeRecurring: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SaleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SaleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SaleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SaleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SaleSumOrderByAggregateInputSchema).optional()
}).strict();

export default SaleOrderByWithAggregationInputSchema;
