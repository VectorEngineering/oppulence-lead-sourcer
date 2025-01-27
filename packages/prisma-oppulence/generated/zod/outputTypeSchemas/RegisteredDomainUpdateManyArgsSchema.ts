import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainUpdateManyMutationInputSchema } from '../inputTypeSchemas/RegisteredDomainUpdateManyMutationInputSchema'
import { RegisteredDomainUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RegisteredDomainUncheckedUpdateManyInputSchema'
import { RegisteredDomainWhereInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereInputSchema'

export const RegisteredDomainUpdateManyArgsSchema: z.ZodType<Prisma.RegisteredDomainUpdateManyArgs> = z.object({
  data: z.union([ RegisteredDomainUpdateManyMutationInputSchema,RegisteredDomainUncheckedUpdateManyInputSchema ]),
  where: RegisteredDomainWhereInputSchema.optional(),
}).strict() ;

export default RegisteredDomainUpdateManyArgsSchema;
