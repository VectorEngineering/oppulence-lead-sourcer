import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DefaultDomainsWhereInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereInputSchema'
import { DefaultDomainsOrderByWithRelationInputSchema } from '../inputTypeSchemas/DefaultDomainsOrderByWithRelationInputSchema'
import { DefaultDomainsWhereUniqueInputSchema } from '../inputTypeSchemas/DefaultDomainsWhereUniqueInputSchema'

export const DefaultDomainsAggregateArgsSchema: z.ZodType<Prisma.DefaultDomainsAggregateArgs> = z.object({
  where: DefaultDomainsWhereInputSchema.optional(),
  orderBy: z.union([ DefaultDomainsOrderByWithRelationInputSchema.array(),DefaultDomainsOrderByWithRelationInputSchema ]).optional(),
  cursor: DefaultDomainsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default DefaultDomainsAggregateArgsSchema;
