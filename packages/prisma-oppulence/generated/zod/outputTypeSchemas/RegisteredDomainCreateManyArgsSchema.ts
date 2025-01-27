import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainCreateManyInputSchema } from '../inputTypeSchemas/RegisteredDomainCreateManyInputSchema'

export const RegisteredDomainCreateManyArgsSchema: z.ZodType<Prisma.RegisteredDomainCreateManyArgs> = z.object({
  data: z.union([ RegisteredDomainCreateManyInputSchema,RegisteredDomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default RegisteredDomainCreateManyArgsSchema;
