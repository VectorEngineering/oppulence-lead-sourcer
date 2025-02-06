import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadWhereInputSchema } from '../inputTypeSchemas/LeadWhereInputSchema'
import { LeadOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadOrderByWithRelationInputSchema'
import { LeadWhereUniqueInputSchema } from '../inputTypeSchemas/LeadWhereUniqueInputSchema'

export const LeadAggregateArgsSchema: z.ZodType<Prisma.LeadAggregateArgs> = z.object({
  where: LeadWhereInputSchema.optional(),
  orderBy: z.union([ LeadOrderByWithRelationInputSchema.array(),LeadOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadAggregateArgsSchema;
