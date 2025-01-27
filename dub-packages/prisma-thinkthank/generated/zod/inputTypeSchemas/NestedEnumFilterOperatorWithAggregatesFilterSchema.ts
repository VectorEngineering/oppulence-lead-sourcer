import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FilterOperatorSchema } from './FilterOperatorSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumFilterOperatorFilterSchema } from './NestedEnumFilterOperatorFilterSchema';

export const NestedEnumFilterOperatorWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFilterOperatorWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FilterOperatorSchema).optional(),
  in: z.lazy(() => FilterOperatorSchema).array().optional(),
  notIn: z.lazy(() => FilterOperatorSchema).array().optional(),
  not: z.union([ z.lazy(() => FilterOperatorSchema),z.lazy(() => NestedEnumFilterOperatorWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFilterOperatorFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFilterOperatorFilterSchema).optional()
}).strict();

export default NestedEnumFilterOperatorWithAggregatesFilterSchema;
