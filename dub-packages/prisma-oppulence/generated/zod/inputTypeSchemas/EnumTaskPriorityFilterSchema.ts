import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { NestedEnumTaskPriorityFilterSchema } from './NestedEnumTaskPriorityFilterSchema';

export const EnumTaskPriorityFilterSchema: z.ZodType<Prisma.EnumTaskPriorityFilter> = z.object({
  equals: z.lazy(() => TaskPrioritySchema).optional(),
  in: z.lazy(() => TaskPrioritySchema).array().optional(),
  notIn: z.lazy(() => TaskPrioritySchema).array().optional(),
  not: z.union([ z.lazy(() => TaskPrioritySchema),z.lazy(() => NestedEnumTaskPriorityFilterSchema) ]).optional(),
}).strict();

export default EnumTaskPriorityFilterSchema;
