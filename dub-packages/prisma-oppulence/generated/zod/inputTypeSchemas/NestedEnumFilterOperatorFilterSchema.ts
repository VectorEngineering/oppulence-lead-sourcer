import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FilterOperatorSchema } from './FilterOperatorSchema';

export const NestedEnumFilterOperatorFilterSchema: z.ZodType<Prisma.NestedEnumFilterOperatorFilter> = z.object({
  equals: z.lazy(() => FilterOperatorSchema).optional(),
  in: z.lazy(() => FilterOperatorSchema).array().optional(),
  notIn: z.lazy(() => FilterOperatorSchema).array().optional(),
  not: z.union([ z.lazy(() => FilterOperatorSchema),z.lazy(() => NestedEnumFilterOperatorFilterSchema) ]).optional(),
}).strict();

export default NestedEnumFilterOperatorFilterSchema;
