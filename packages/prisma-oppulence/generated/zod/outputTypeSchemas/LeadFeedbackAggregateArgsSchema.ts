import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadFeedbackWhereInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereInputSchema'
import { LeadFeedbackOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadFeedbackOrderByWithRelationInputSchema'
import { LeadFeedbackWhereUniqueInputSchema } from '../inputTypeSchemas/LeadFeedbackWhereUniqueInputSchema'

export const LeadFeedbackAggregateArgsSchema: z.ZodType<Prisma.LeadFeedbackAggregateArgs> = z.object({
  where: LeadFeedbackWhereInputSchema.optional(),
  orderBy: z.union([ LeadFeedbackOrderByWithRelationInputSchema.array(),LeadFeedbackOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadFeedbackWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadFeedbackAggregateArgsSchema;
