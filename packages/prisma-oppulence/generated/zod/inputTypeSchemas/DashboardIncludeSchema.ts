import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkArgsSchema } from "../outputTypeSchemas/LinkArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const DashboardIncludeSchema: z.ZodType<Prisma.DashboardInclude> = z.object({
  link: z.union([z.boolean(),z.lazy(() => LinkArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default DashboardIncludeSchema;
