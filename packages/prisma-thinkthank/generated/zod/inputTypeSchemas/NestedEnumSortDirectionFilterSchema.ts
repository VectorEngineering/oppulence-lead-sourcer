import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortDirectionSchema } from './SortDirectionSchema';

export const NestedEnumSortDirectionFilterSchema: z.ZodType<Prisma.NestedEnumSortDirectionFilter> = z.object({
  equals: z.lazy(() => SortDirectionSchema).optional(),
  in: z.lazy(() => SortDirectionSchema).array().optional(),
  notIn: z.lazy(() => SortDirectionSchema).array().optional(),
  not: z.union([ z.lazy(() => SortDirectionSchema),z.lazy(() => NestedEnumSortDirectionFilterSchema) ]).optional(),
}).strict();

export default NestedEnumSortDirectionFilterSchema;
