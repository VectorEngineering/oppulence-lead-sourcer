import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskStatusSchema } from './TaskStatusSchema';
import { TaskPrioritySchema } from './TaskPrioritySchema';
import { UserCreateNestedOneWithoutLeadTaskInputSchema } from './UserCreateNestedOneWithoutLeadTaskInputSchema';

export const LeadTaskCreateWithoutLeadInputSchema: z.ZodType<Prisma.LeadTaskCreateWithoutLeadInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => TaskStatusSchema).optional(),
  priority: z.lazy(() => TaskPrioritySchema).optional(),
  dueDate: z.coerce.date().optional().nullable(),
  completedAt: z.coerce.date().optional().nullable(),
  createdBy: z.string().optional().nullable(),
  updatedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  assignedTo: z.lazy(() => UserCreateNestedOneWithoutLeadTaskInputSchema).optional()
}).strict();

export default LeadTaskCreateWithoutLeadInputSchema;
