import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const AppSelectSchema: z.ZodType<Prisma.AppSelect> = z.object({
  id: z.boolean().optional(),
  appId: z.boolean().optional(),
  config: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  settings: z.boolean().optional(),
  userId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default AppSelectSchema;
