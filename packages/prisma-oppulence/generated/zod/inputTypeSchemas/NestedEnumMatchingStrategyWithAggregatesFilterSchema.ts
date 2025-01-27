import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MatchingStrategySchema } from './MatchingStrategySchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumMatchingStrategyFilterSchema } from './NestedEnumMatchingStrategyFilterSchema';

export const NestedEnumMatchingStrategyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumMatchingStrategyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MatchingStrategySchema).optional(),
  in: z.lazy(() => MatchingStrategySchema).array().optional(),
  notIn: z.lazy(() => MatchingStrategySchema).array().optional(),
  not: z.union([ z.lazy(() => MatchingStrategySchema),z.lazy(() => NestedEnumMatchingStrategyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMatchingStrategyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMatchingStrategyFilterSchema).optional()
}).strict();

export default NestedEnumMatchingStrategyWithAggregatesFilterSchema;
