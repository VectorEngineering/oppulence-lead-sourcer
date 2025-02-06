import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RestrictedTokenWhereInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereInputSchema'
import { RestrictedTokenOrderByWithRelationInputSchema } from '../inputTypeSchemas/RestrictedTokenOrderByWithRelationInputSchema'
import { RestrictedTokenWhereUniqueInputSchema } from '../inputTypeSchemas/RestrictedTokenWhereUniqueInputSchema'

export const RestrictedTokenAggregateArgsSchema: z.ZodType<Prisma.RestrictedTokenAggregateArgs> = z.object({
  where: RestrictedTokenWhereInputSchema.optional(),
  orderBy: z.union([ RestrictedTokenOrderByWithRelationInputSchema.array(),RestrictedTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: RestrictedTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RestrictedTokenAggregateArgsSchema;
