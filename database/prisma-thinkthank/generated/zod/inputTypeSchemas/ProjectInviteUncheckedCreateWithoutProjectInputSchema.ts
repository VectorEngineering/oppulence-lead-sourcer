import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleSchema } from './RoleSchema';

export const ProjectInviteUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectInviteUncheckedCreateWithoutProjectInput> = z.object({
  email: z.string(),
  expires: z.coerce.date(),
  role: z.lazy(() => RoleSchema).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export default ProjectInviteUncheckedCreateWithoutProjectInputSchema;
