import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumTaskStatusWithAggregatesFilterSchema } from './EnumTaskStatusWithAggregatesFilterSchema';
import { TaskStatusSchema } from './TaskStatusSchema';
import { EnumTaskPriorityWithAggregatesFilterSchema } from './EnumTaskPriorityWithAggregatesFilterSchema';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadTaskScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadTaskScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTaskScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadTaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTaskScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTaskScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadTaskScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumTaskStatusWithAggregatesFilterSchema),z.lazy(() => TaskStatusSchema) ]).optional(),
  priority: z.union([ z.lazy(() => EnumTaskPriorityWithAggregatesFilterSchema),z.lazy(() => TaskPrioritySchema) ]).optional(),
  dueDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  completedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  assignedToId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadTaskScalarWhereWithAggregatesInputSchema;
