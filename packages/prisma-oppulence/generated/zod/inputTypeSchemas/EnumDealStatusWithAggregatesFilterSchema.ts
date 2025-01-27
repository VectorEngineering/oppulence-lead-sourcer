import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealStatusSchema } from './DealStatusSchema';
import { NestedEnumDealStatusWithAggregatesFilterSchema } from './NestedEnumDealStatusWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumDealStatusFilterSchema } from './NestedEnumDealStatusFilterSchema';

export const EnumDealStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDealStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DealStatusSchema).optional(),
  in: z.lazy(() => DealStatusSchema).array().optional(),
  notIn: z.lazy(() => DealStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => DealStatusSchema),z.lazy(() => NestedEnumDealStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDealStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDealStatusFilterSchema).optional()
}).strict();

export default EnumDealStatusWithAggregatesFilterSchema;
