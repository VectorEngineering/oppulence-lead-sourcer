import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTaskWhereInputSchema } from './LeadTaskWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumTaskStatusFilterSchema } from './EnumTaskStatusFilterSchema';
import { TaskStatusSchema } from './TaskStatusSchema';
import { EnumTaskPriorityFilterSchema } from './EnumTaskPriorityFilterSchema';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadTaskWhereUniqueInputSchema: z.ZodType<Prisma.LeadTaskWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LeadTaskWhereInputSchema),z.lazy(() => LeadTaskWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTaskWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTaskWhereInputSchema),z.lazy(() => LeadTaskWhereInputSchema).array() ]).optional(),
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
  assignedTo: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict());

export default LeadTaskWhereUniqueInputSchema;
