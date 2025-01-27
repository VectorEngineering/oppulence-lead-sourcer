import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CurrencySchema } from './CurrencySchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCurrencyFilterSchema } from './NestedEnumCurrencyFilterSchema';

export const NestedEnumCurrencyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCurrencyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CurrencySchema).optional(),
  in: z.lazy(() => CurrencySchema).array().optional(),
  notIn: z.lazy(() => CurrencySchema).array().optional(),
  not: z.union([ z.lazy(() => CurrencySchema),z.lazy(() => NestedEnumCurrencyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCurrencyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCurrencyFilterSchema).optional()
}).strict();

export default NestedEnumCurrencyWithAggregatesFilterSchema;
