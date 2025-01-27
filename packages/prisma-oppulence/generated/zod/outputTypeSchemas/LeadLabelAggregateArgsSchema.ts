import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadLabelWhereInputSchema } from '../inputTypeSchemas/LeadLabelWhereInputSchema'
import { LeadLabelOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadLabelOrderByWithRelationInputSchema'
import { LeadLabelWhereUniqueInputSchema } from '../inputTypeSchemas/LeadLabelWhereUniqueInputSchema'

export const LeadLabelAggregateArgsSchema: z.ZodType<Prisma.LeadLabelAggregateArgs> = z.object({
  where: LeadLabelWhereInputSchema.optional(),
  orderBy: z.union([ LeadLabelOrderByWithRelationInputSchema.array(),LeadLabelOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadLabelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadLabelAggregateArgsSchema;
