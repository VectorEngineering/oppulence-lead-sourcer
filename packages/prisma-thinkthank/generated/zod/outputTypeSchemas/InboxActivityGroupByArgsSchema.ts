import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxActivityWhereInputSchema } from '../inputTypeSchemas/InboxActivityWhereInputSchema'
import { InboxActivityOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InboxActivityOrderByWithAggregationInputSchema'
import { InboxActivityScalarFieldEnumSchema } from '../inputTypeSchemas/InboxActivityScalarFieldEnumSchema'
import { InboxActivityScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InboxActivityScalarWhereWithAggregatesInputSchema'

export const InboxActivityGroupByArgsSchema: z.ZodType<Prisma.InboxActivityGroupByArgs> = z.object({
  where: InboxActivityWhereInputSchema.optional(),
  orderBy: z.union([ InboxActivityOrderByWithAggregationInputSchema.array(),InboxActivityOrderByWithAggregationInputSchema ]).optional(),
  by: InboxActivityScalarFieldEnumSchema.array(),
  having: InboxActivityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InboxActivityGroupByArgsSchema;
