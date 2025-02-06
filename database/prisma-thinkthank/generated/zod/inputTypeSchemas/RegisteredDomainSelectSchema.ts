import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"

export const RegisteredDomainSelectSchema: z.ZodType<Prisma.RegisteredDomainSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  projectId: z.boolean().optional(),
  domainId: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  domain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
}).strict()

export default RegisteredDomainSelectSchema;
