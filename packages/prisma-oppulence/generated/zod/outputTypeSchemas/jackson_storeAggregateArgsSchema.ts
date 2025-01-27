import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_storeWhereInputSchema } from '../inputTypeSchemas/jackson_storeWhereInputSchema'
import { jackson_storeOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_storeOrderByWithRelationInputSchema'
import { jackson_storeWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_storeWhereUniqueInputSchema'

export const jackson_storeAggregateArgsSchema: z.ZodType<Prisma.jackson_storeAggregateArgs> = z.object({
  where: jackson_storeWhereInputSchema.optional(),
  orderBy: z.union([ jackson_storeOrderByWithRelationInputSchema.array(),jackson_storeOrderByWithRelationInputSchema ]).optional(),
  cursor: jackson_storeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default jackson_storeAggregateArgsSchema;
