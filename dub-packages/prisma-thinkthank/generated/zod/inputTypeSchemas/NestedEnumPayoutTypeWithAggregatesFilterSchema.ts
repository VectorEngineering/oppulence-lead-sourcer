import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutTypeSchema } from './PayoutTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPayoutTypeFilterSchema } from './NestedEnumPayoutTypeFilterSchema';

export const NestedEnumPayoutTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPayoutTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PayoutTypeSchema).optional(),
  in: z.lazy(() => PayoutTypeSchema).array().optional(),
  notIn: z.lazy(() => PayoutTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PayoutTypeSchema),z.lazy(() => NestedEnumPayoutTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPayoutTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPayoutTypeFilterSchema).optional()
}).strict();

export default NestedEnumPayoutTypeWithAggregatesFilterSchema;
