import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationWhereInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereInputSchema'
import { LeadCommunicationOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadCommunicationOrderByWithRelationInputSchema'
import { LeadCommunicationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereUniqueInputSchema'

export const LeadCommunicationAggregateArgsSchema: z.ZodType<Prisma.LeadCommunicationAggregateArgs> = z.object({
  where: LeadCommunicationWhereInputSchema.optional(),
  orderBy: z.union([ LeadCommunicationOrderByWithRelationInputSchema.array(),LeadCommunicationOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadCommunicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadCommunicationAggregateArgsSchema;
