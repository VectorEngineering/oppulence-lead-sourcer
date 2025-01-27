import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainSelectSchema } from '../inputTypeSchemas/RegisteredDomainSelectSchema';
import { RegisteredDomainIncludeSchema } from '../inputTypeSchemas/RegisteredDomainIncludeSchema';

export const RegisteredDomainArgsSchema: z.ZodType<Prisma.RegisteredDomainDefaultArgs> = z.object({
  select: z.lazy(() => RegisteredDomainSelectSchema).optional(),
  include: z.lazy(() => RegisteredDomainIncludeSchema).optional(),
}).strict();

export default RegisteredDomainArgsSchema;
