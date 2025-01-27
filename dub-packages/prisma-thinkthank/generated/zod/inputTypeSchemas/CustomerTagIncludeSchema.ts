import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"

export const CustomerTagIncludeSchema: z.ZodType<Prisma.CustomerTagInclude> = z.object({
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
}).strict()

export default CustomerTagIncludeSchema;
