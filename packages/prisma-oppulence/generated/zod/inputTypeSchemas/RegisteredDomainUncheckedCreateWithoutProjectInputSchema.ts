import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RegisteredDomainUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.RegisteredDomainUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  slug: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  expiresAt: z.coerce.date(),
  domainId: z.string().optional().nullable()
}).strict();

export default RegisteredDomainUncheckedCreateWithoutProjectInputSchema;
