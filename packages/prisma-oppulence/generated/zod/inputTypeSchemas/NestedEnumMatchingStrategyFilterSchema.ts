import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MatchingStrategySchema } from './MatchingStrategySchema';

export const NestedEnumMatchingStrategyFilterSchema: z.ZodType<Prisma.NestedEnumMatchingStrategyFilter> = z.object({
  equals: z.lazy(() => MatchingStrategySchema).optional(),
  in: z.lazy(() => MatchingStrategySchema).array().optional(),
  notIn: z.lazy(() => MatchingStrategySchema).array().optional(),
  not: z.union([ z.lazy(() => MatchingStrategySchema),z.lazy(() => NestedEnumMatchingStrategyFilterSchema) ]).optional(),
}).strict();

export default NestedEnumMatchingStrategyFilterSchema;
