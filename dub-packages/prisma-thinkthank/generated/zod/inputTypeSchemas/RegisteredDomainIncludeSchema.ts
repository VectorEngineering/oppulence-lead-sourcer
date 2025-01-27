import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"

export const RegisteredDomainIncludeSchema: z.ZodType<Prisma.RegisteredDomainInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  domain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
}).strict()

export default RegisteredDomainIncludeSchema;
