import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_ttlWhereInputSchema } from '../inputTypeSchemas/jackson_ttlWhereInputSchema'
import { jackson_ttlOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_ttlOrderByWithRelationInputSchema'
import { jackson_ttlWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_ttlWhereUniqueInputSchema'

export const jackson_ttlAggregateArgsSchema: z.ZodType<Prisma.jackson_ttlAggregateArgs> = z.object({
  where: jackson_ttlWhereInputSchema.optional(),
  orderBy: z.union([ jackson_ttlOrderByWithRelationInputSchema.array(),jackson_ttlOrderByWithRelationInputSchema ]).optional(),
  cursor: jackson_ttlWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default jackson_ttlAggregateArgsSchema;
