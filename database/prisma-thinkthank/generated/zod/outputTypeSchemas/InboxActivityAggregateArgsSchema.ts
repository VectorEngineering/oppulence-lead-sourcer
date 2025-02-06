import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxActivityWhereInputSchema } from '../inputTypeSchemas/InboxActivityWhereInputSchema'
import { InboxActivityOrderByWithRelationInputSchema } from '../inputTypeSchemas/InboxActivityOrderByWithRelationInputSchema'
import { InboxActivityWhereUniqueInputSchema } from '../inputTypeSchemas/InboxActivityWhereUniqueInputSchema'

export const InboxActivityAggregateArgsSchema: z.ZodType<Prisma.InboxActivityAggregateArgs> = z.object({
  where: InboxActivityWhereInputSchema.optional(),
  orderBy: z.union([ InboxActivityOrderByWithRelationInputSchema.array(),InboxActivityOrderByWithRelationInputSchema ]).optional(),
  cursor: InboxActivityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default InboxActivityAggregateArgsSchema;
