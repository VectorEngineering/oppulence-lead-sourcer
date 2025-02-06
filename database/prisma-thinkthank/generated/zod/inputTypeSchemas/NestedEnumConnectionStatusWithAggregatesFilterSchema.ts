import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConnectionStatusSchema } from './ConnectionStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumConnectionStatusFilterSchema } from './NestedEnumConnectionStatusFilterSchema';

export const NestedEnumConnectionStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumConnectionStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ConnectionStatusSchema).optional(),
  in: z.lazy(() => ConnectionStatusSchema).array().optional(),
  notIn: z.lazy(() => ConnectionStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => ConnectionStatusSchema),z.lazy(() => NestedEnumConnectionStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConnectionStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConnectionStatusFilterSchema).optional()
}).strict();

export default NestedEnumConnectionStatusWithAggregatesFilterSchema;
