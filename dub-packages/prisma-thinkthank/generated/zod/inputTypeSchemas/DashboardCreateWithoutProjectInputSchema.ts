import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateNestedOneWithoutDashboardInputSchema } from './LinkCreateNestedOneWithoutDashboardInputSchema';
import { UserCreateNestedOneWithoutDashboardsInputSchema } from './UserCreateNestedOneWithoutDashboardsInputSchema';

export const DashboardCreateWithoutProjectInputSchema: z.ZodType<Prisma.DashboardCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  doIndex: z.boolean().optional(),
  password: z.string().optional().nullable(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  link: z.lazy(() => LinkCreateNestedOneWithoutDashboardInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDashboardsInputSchema).optional()
}).strict();

export default DashboardCreateWithoutProjectInputSchema;
