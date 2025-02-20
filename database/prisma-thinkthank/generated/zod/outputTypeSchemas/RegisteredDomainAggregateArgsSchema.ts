import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainWhereInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereInputSchema'
import { RegisteredDomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/RegisteredDomainOrderByWithRelationInputSchema'
import { RegisteredDomainWhereUniqueInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereUniqueInputSchema'

export const RegisteredDomainAggregateArgsSchema: z.ZodType<Prisma.RegisteredDomainAggregateArgs> = z.object({
  where: RegisteredDomainWhereInputSchema.optional(),
  orderBy: z.union([ RegisteredDomainOrderByWithRelationInputSchema.array(),RegisteredDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: RegisteredDomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RegisteredDomainAggregateArgsSchema;
