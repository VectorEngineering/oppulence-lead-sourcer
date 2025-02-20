import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateNestedOneWithoutDashboardsInputSchema } from './ProjectCreateNestedOneWithoutDashboardsInputSchema';
import { UserCreateNestedOneWithoutDashboardsInputSchema } from './UserCreateNestedOneWithoutDashboardsInputSchema';

export const DashboardCreateWithoutLinkInputSchema: z.ZodType<Prisma.DashboardCreateWithoutLinkInput> = z.object({
  id: z.string().cuid().optional(),
  doIndex: z.boolean().optional(),
  password: z.string().optional().nullable(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutDashboardsInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutDashboardsInputSchema).optional()
}).strict();

export default DashboardCreateWithoutLinkInputSchema;
