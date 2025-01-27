import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RegisteredDomainWhereInputSchema } from '../inputTypeSchemas/RegisteredDomainWhereInputSchema'
import { RegisteredDomainOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RegisteredDomainOrderByWithAggregationInputSchema'
import { RegisteredDomainScalarFieldEnumSchema } from '../inputTypeSchemas/RegisteredDomainScalarFieldEnumSchema'
import { RegisteredDomainScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RegisteredDomainScalarWhereWithAggregatesInputSchema'

export const RegisteredDomainGroupByArgsSchema: z.ZodType<Prisma.RegisteredDomainGroupByArgs> = z.object({
  where: RegisteredDomainWhereInputSchema.optional(),
  orderBy: z.union([ RegisteredDomainOrderByWithAggregationInputSchema.array(),RegisteredDomainOrderByWithAggregationInputSchema ]).optional(),
  by: RegisteredDomainScalarFieldEnumSchema.array(),
  having: RegisteredDomainScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RegisteredDomainGroupByArgsSchema;
