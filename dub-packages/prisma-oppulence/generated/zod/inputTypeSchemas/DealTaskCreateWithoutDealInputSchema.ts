import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskPrioritySchema } from './DealTaskPrioritySchema';
import { DealTaskStatusSchema } from './DealTaskStatusSchema';
import { UserCreateNestedOneWithoutDealTaskInputSchema } from './UserCreateNestedOneWithoutDealTaskInputSchema';

export const DealTaskCreateWithoutDealInputSchema: z.ZodType<Prisma.DealTaskCreateWithoutDealInput> = z.object({
  id: z.string().cuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  dueDate: z.coerce.date().optional().nullable(),
  priority: z.lazy(() => DealTaskPrioritySchema).optional().nullable(),
  status: z.lazy(() => DealTaskStatusSchema).optional(),
  completedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  assignedTo: z.lazy(() => UserCreateNestedOneWithoutDealTaskInputSchema).optional()
}).strict();

export default DealTaskCreateWithoutDealInputSchema;
