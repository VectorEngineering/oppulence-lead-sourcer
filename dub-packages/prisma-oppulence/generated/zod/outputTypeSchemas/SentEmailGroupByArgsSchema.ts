import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SentEmailWhereInputSchema } from '../inputTypeSchemas/SentEmailWhereInputSchema'
import { SentEmailOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SentEmailOrderByWithAggregationInputSchema'
import { SentEmailScalarFieldEnumSchema } from '../inputTypeSchemas/SentEmailScalarFieldEnumSchema'
import { SentEmailScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SentEmailScalarWhereWithAggregatesInputSchema'

export const SentEmailGroupByArgsSchema: z.ZodType<Prisma.SentEmailGroupByArgs> = z.object({
  where: SentEmailWhereInputSchema.optional(),
  orderBy: z.union([ SentEmailOrderByWithAggregationInputSchema.array(),SentEmailOrderByWithAggregationInputSchema ]).optional(),
  by: SentEmailScalarFieldEnumSchema.array(),
  having: SentEmailScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SentEmailGroupByArgsSchema;
