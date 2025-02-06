import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailWhereInputSchema } from '../inputTypeSchemas/SentEmailWhereInputSchema'
import { SentEmailOrderByWithRelationInputSchema } from '../inputTypeSchemas/SentEmailOrderByWithRelationInputSchema'
import { SentEmailWhereUniqueInputSchema } from '../inputTypeSchemas/SentEmailWhereUniqueInputSchema'

export const SentEmailAggregateArgsSchema: z.ZodType<Prisma.SentEmailAggregateArgs> = z.object({
  where: SentEmailWhereInputSchema.optional(),
  orderBy: z.union([ SentEmailOrderByWithRelationInputSchema.array(),SentEmailOrderByWithRelationInputSchema ]).optional(),
  cursor: SentEmailWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SentEmailAggregateArgsSchema;
