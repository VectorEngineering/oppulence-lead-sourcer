import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_indexWhereInputSchema } from '../inputTypeSchemas/jackson_indexWhereInputSchema'
import { jackson_indexOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_indexOrderByWithRelationInputSchema'
import { jackson_indexWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_indexWhereUniqueInputSchema'

export const jackson_indexAggregateArgsSchema: z.ZodType<Prisma.jackson_indexAggregateArgs> = z.object({
  where: jackson_indexWhereInputSchema.optional(),
  orderBy: z.union([ jackson_indexOrderByWithRelationInputSchema.array(),jackson_indexOrderByWithRelationInputSchema ]).optional(),
  cursor: jackson_indexWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default jackson_indexAggregateArgsSchema;
