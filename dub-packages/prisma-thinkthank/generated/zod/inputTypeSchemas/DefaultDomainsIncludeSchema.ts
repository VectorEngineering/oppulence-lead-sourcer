import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const DefaultDomainsIncludeSchema: z.ZodType<Prisma.DefaultDomainsInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default DefaultDomainsIncludeSchema;
