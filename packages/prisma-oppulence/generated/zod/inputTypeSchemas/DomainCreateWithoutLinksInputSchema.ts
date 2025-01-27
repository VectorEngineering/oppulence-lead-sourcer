import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateNestedOneWithoutDomainsInputSchema } from './ProjectCreateNestedOneWithoutDomainsInputSchema';
import { RegisteredDomainCreateNestedOneWithoutDomainInputSchema } from './RegisteredDomainCreateNestedOneWithoutDomainInputSchema';
import { ProgramCreateNestedManyWithoutPrimaryDomainInputSchema } from './ProgramCreateNestedManyWithoutPrimaryDomainInputSchema';

export const DomainCreateWithoutLinksInputSchema: z.ZodType<Prisma.DomainCreateWithoutLinksInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  verified: z.boolean().optional(),
  placeholder: z.string().optional().nullable(),
  expiredUrl: z.string().optional().nullable(),
  notFoundUrl: z.string().optional().nullable(),
  primary: z.boolean().optional(),
  archived: z.boolean().optional(),
  lastChecked: z.coerce.date().optional(),
  logo: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutDomainsInputSchema).optional(),
  registeredDomain: z.lazy(() => RegisteredDomainCreateNestedOneWithoutDomainInputSchema).optional(),
  programs: z.lazy(() => ProgramCreateNestedManyWithoutPrimaryDomainInputSchema).optional()
}).strict();

export default DomainCreateWithoutLinksInputSchema;
