import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainWhereInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereInputSchema'

export const RegisteredDomainDeleteManyArgsSchema: z.ZodType<Prisma.RegisteredDomainDeleteManyArgs> = z.object({
  where: RegisteredDomainWhereInputSchema.optional(),
}).strict() ;

export default RegisteredDomainDeleteManyArgsSchema;
