import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTaskPriorityFilterSchema } from './NestedEnumTaskPriorityFilterSchema';

export const NestedEnumTaskPriorityWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTaskPriorityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TaskPrioritySchema).optional(),
  in: z.lazy(() => TaskPrioritySchema).array().optional(),
  notIn: z.lazy(() => TaskPrioritySchema).array().optional(),
  not: z.union([ z.lazy(() => TaskPrioritySchema),z.lazy(() => NestedEnumTaskPriorityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskPriorityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskPriorityFilterSchema).optional()
}).strict();

export default NestedEnumTaskPriorityWithAggregatesFilterSchema;
