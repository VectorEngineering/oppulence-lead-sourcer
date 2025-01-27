import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_indexWhereInputSchema } from '../inputTypeSchemas/jackson_indexWhereInputSchema'
import { jackson_indexOrderByWithAggregationInputSchema } from '../inputTypeSchemas/jackson_indexOrderByWithAggregationInputSchema'
import { Jackson_indexScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_indexScalarFieldEnumSchema'
import { jackson_indexScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/jackson_indexScalarWhereWithAggregatesInputSchema'

export const jackson_indexGroupByArgsSchema: z.ZodType<Prisma.jackson_indexGroupByArgs> = z.object({
  where: jackson_indexWhereInputSchema.optional(),
  orderBy: z.union([ jackson_indexOrderByWithAggregationInputSchema.array(),jackson_indexOrderByWithAggregationInputSchema ]).optional(),
  by: Jackson_indexScalarFieldEnumSchema.array(),
  having: jackson_indexScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default jackson_indexGroupByArgsSchema;
