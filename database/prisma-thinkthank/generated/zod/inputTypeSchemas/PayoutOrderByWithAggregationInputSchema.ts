import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PayoutCountOrderByAggregateInputSchema } from './PayoutCountOrderByAggregateInputSchema';
import { PayoutAvgOrderByAggregateInputSchema } from './PayoutAvgOrderByAggregateInputSchema';
import { PayoutMaxOrderByAggregateInputSchema } from './PayoutMaxOrderByAggregateInputSchema';
import { PayoutMinOrderByAggregateInputSchema } from './PayoutMinOrderByAggregateInputSchema';
import { PayoutSumOrderByAggregateInputSchema } from './PayoutSumOrderByAggregateInputSchema';

export const PayoutOrderByWithAggregationInputSchema: z.ZodType<Prisma.PayoutOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  programId: z.lazy(() => SortOrderSchema).optional(),
  partnerId: z.lazy(() => SortOrderSchema).optional(),
  invoiceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  periodStart: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  periodEnd: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  quantity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  stripeTransferId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  paidAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PayoutCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PayoutAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PayoutMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PayoutMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PayoutSumOrderByAggregateInputSchema).optional()
}).strict();

export default PayoutOrderByWithAggregationInputSchema;
