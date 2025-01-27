import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumPayoutStatusFilterSchema } from './EnumPayoutStatusFilterSchema';
import { PayoutStatusSchema } from './PayoutStatusSchema';
import { EnumPayoutTypeFilterSchema } from './EnumPayoutTypeFilterSchema';
import { PayoutTypeSchema } from './PayoutTypeSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PayoutScalarWhereInputSchema: z.ZodType<Prisma.PayoutScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PayoutScalarWhereInputSchema),z.lazy(() => PayoutScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PayoutScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PayoutScalarWhereInputSchema),z.lazy(() => PayoutScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partnerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  invoiceId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  amount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  currency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumPayoutStatusFilterSchema),z.lazy(() => PayoutStatusSchema) ]).optional(),
  type: z.union([ z.lazy(() => EnumPayoutTypeFilterSchema),z.lazy(() => PayoutTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  periodStart: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  periodEnd: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  stripeTransferId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  paidAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default PayoutScalarWhereInputSchema;
