import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTaskStatusFilterSchema } from './EnumTaskStatusFilterSchema';
import { TaskStatusSchema } from './TaskStatusSchema';
import { EnumTaskPriorityFilterSchema } from './EnumTaskPriorityFilterSchema';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LeadTaskScalarWhereInputSchema: z.ZodType<Prisma.LeadTaskScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTaskScalarWhereInputSchema),z.lazy(() => LeadTaskScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTaskScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTaskScalarWhereInputSchema),z.lazy(() => LeadTaskScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTaskStatusFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => EnumTaskPriorityFilterSchema),z.lazy(() => TaskPrioritySchema) ]).optional(),
  dueDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  assignedToId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadTaskScalarWhereInputSchema;
