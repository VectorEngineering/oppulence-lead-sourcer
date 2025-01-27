import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateNestedOneWithoutDashboardInputSchema } from './LinkCreateNestedOneWithoutDashboardInputSchema';
import { ProjectCreateNestedOneWithoutDashboardsInputSchema } from './ProjectCreateNestedOneWithoutDashboardsInputSchema';

export const DashboardCreateWithoutUserInputSchema: z.ZodType<Prisma.DashboardCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  doIndex: z.boolean().optional(),
  password: z.string().optional().nullable(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  link: z.lazy(() => LinkCreateNestedOneWithoutDashboardInputSchema).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutDashboardsInputSchema).optional()
}).strict();

export default DashboardCreateWithoutUserInputSchema;
