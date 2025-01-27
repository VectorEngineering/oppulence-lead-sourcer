import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumCommissionTypeWithAggregatesFilterSchema } from './EnumCommissionTypeWithAggregatesFilterSchema';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { EnumCommissionIntervalNullableWithAggregatesFilterSchema } from './EnumCommissionIntervalNullableWithAggregatesFilterSchema';
import { CommissionIntervalSchema } from './CommissionIntervalSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const DiscountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DiscountScalarWhereWithAggregatesInputSchema),z.lazy(() => DiscountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DiscountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DiscountScalarWhereWithAggregatesInputSchema),z.lazy(() => DiscountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  amount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => EnumCommissionTypeWithAggregatesFilterSchema),z.lazy(() => CommissionTypeSchema) ]).optional(),
  duration: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  interval: z.union([ z.lazy(() => EnumCommissionIntervalNullableWithAggregatesFilterSchema),z.lazy(() => CommissionIntervalSchema) ]).optional().nullable(),
  couponId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  couponTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  workspaceId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  programId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default DiscountScalarWhereWithAggregatesInputSchema;
