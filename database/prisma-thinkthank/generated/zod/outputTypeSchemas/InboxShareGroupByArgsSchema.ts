import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxShareWhereInputSchema } from '../inputTypeSchemas/InboxShareWhereInputSchema'
import { InboxShareOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InboxShareOrderByWithAggregationInputSchema'
import { InboxShareScalarFieldEnumSchema } from '../inputTypeSchemas/InboxShareScalarFieldEnumSchema'
import { InboxShareScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InboxShareScalarWhereWithAggregatesInputSchema'

export const InboxShareGroupByArgsSchema: z.ZodType<Prisma.InboxShareGroupByArgs> = z.object({
  where: InboxShareWhereInputSchema.optional(),
  orderBy: z.union([ InboxShareOrderByWithAggregationInputSchema.array(),InboxShareOrderByWithAggregationInputSchema ]).optional(),
  by: InboxShareScalarFieldEnumSchema.array(),
  having: InboxShareScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InboxShareGroupByArgsSchema;
