import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema } from './ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema';
import { DomainCreateNestedOneWithoutRegisteredDomainInputSchema } from './DomainCreateNestedOneWithoutRegisteredDomainInputSchema';

export const RegisteredDomainCreateInputSchema: z.ZodType<Prisma.RegisteredDomainCreateInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutRegisteredDomainsInputSchema),
  domain: z.lazy(() => DomainCreateNestedOneWithoutRegisteredDomainInputSchema).optional()
}).strict();

export default RegisteredDomainCreateInputSchema;
