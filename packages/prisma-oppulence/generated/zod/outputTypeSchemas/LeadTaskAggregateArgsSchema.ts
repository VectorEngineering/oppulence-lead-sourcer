import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTaskWhereInputSchema } from '../inputTypeSchemas/LeadTaskWhereInputSchema'
import { LeadTaskOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadTaskOrderByWithRelationInputSchema'
import { LeadTaskWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTaskWhereUniqueInputSchema'

export const LeadTaskAggregateArgsSchema: z.ZodType<Prisma.LeadTaskAggregateArgs> = z.object({
  where: LeadTaskWhereInputSchema.optional(),
  orderBy: z.union([ LeadTaskOrderByWithRelationInputSchema.array(),LeadTaskOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadTaskWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadTaskAggregateArgsSchema;
