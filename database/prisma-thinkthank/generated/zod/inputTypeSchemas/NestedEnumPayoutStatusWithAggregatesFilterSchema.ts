import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutStatusSchema } from './PayoutStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPayoutStatusFilterSchema } from './NestedEnumPayoutStatusFilterSchema';

export const NestedEnumPayoutStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPayoutStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PayoutStatusSchema).optional(),
  in: z.lazy(() => PayoutStatusSchema).array().optional(),
  notIn: z.lazy(() => PayoutStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PayoutStatusSchema),z.lazy(() => NestedEnumPayoutStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPayoutStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPayoutStatusFilterSchema).optional()
}).strict();

export default NestedEnumPayoutStatusWithAggregatesFilterSchema;
