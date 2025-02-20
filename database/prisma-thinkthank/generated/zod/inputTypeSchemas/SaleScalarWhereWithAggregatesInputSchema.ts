import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumSaleStatusWithAggregatesFilterSchema } from './EnumSaleStatusWithAggregatesFilterSchema';
import { SaleStatusSchema } from './SaleStatusSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { EnumCommissionTypeWithAggregatesFilterSchema } from './EnumCommissionTypeWithAggregatesFilterSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumCommissionIntervalNullableWithAggregatesFilterSchema } from './EnumCommissionIntervalNullableWithAggregatesFilterSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { BoolNullableWithAggregatesFilterSchema } from './BoolNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SaleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SaleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SaleScalarWhereWithAggregatesInputSchema),z.lazy(() => SaleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SaleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SaleScalarWhereWithAggregatesInputSchema),z.lazy(() => SaleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  payoutId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  customerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  linkId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clickId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  invoiceId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  paymentProcessor: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  earnings: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumSaleStatusWithAggregatesFilterSchema),z.lazy(() => SaleStatusSchema) ]).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  commissionAmount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  commissionType: z.union([ z.lazy(() => EnumCommissionTypeWithAggregatesFilterSchema),z.lazy(() => CommissionTypeSchema) ]).optional(),
  recurringCommission: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  recurringInterval: z.union([ z.lazy(() => EnumCommissionIntervalNullableWithAggregatesFilterSchema),z.lazy(() => CommissionIntervalSchema) ]).optional().nullable(),
  recurringDuration: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  isLifetimeRecurring: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SaleScalarWhereWithAggregatesInputSchema;
