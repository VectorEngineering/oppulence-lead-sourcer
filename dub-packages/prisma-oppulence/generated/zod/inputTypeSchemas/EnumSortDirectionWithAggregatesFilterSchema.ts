import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortDirectionSchema } from './SortDirectionSchema';
import { NestedEnumSortDirectionWithAggregatesFilterSchema } from './NestedEnumSortDirectionWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumSortDirectionFilterSchema } from './NestedEnumSortDirectionFilterSchema';

export const EnumSortDirectionWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSortDirectionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SortDirectionSchema).optional(),
  in: z.lazy(() => SortDirectionSchema).array().optional(),
  notIn: z.lazy(() => SortDirectionSchema).array().optional(),
  not: z.union([ z.lazy(() => SortDirectionSchema),z.lazy(() => NestedEnumSortDirectionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSortDirectionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSortDirectionFilterSchema).optional()
}).strict();

export default EnumSortDirectionWithAggregatesFilterSchema;
