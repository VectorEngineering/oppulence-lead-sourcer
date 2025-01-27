import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EndpointArgsSchema } from "../outputTypeSchemas/EndpointArgsSchema"

export const LogIncludeSchema: z.ZodType<Prisma.LogInclude> = z.object({
  endpoint: z.union([z.boolean(),z.lazy(() => EndpointArgsSchema)]).optional(),
}).strict()

export default LogIncludeSchema;
