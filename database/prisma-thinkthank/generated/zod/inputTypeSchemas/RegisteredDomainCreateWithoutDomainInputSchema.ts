import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema } from './ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema';

export const RegisteredDomainCreateWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainCreateWithoutDomainInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema)
}).strict();

export default RegisteredDomainCreateWithoutDomainInputSchema;
