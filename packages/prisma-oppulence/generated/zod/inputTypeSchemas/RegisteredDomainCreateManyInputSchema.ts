import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RegisteredDomainCreateManyInputSchema: z.ZodType<Prisma.RegisteredDomainCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  projectId: z.string(),
  domainId: z.string().optional().nullable()
}).strict();

export default RegisteredDomainCreateManyInputSchema;
