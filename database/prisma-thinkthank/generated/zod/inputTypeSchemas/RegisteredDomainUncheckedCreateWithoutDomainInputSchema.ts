import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RegisteredDomainUncheckedCreateWithoutDomainInputSchema: z.ZodType<Prisma.RegisteredDomainUncheckedCreateWithoutDomainInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  projectId: z.string()
}).strict();

export default RegisteredDomainUncheckedCreateWithoutDomainInputSchema;
