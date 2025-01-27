import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTouchpointWhereInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereInputSchema'
import { LeadTouchpointOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadTouchpointOrderByWithRelationInputSchema'
import { LeadTouchpointWhereUniqueInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereUniqueInputSchema'

export const LeadTouchpointAggregateArgsSchema: z.ZodType<Prisma.LeadTouchpointAggregateArgs> = z.object({
  where: LeadTouchpointWhereInputSchema.optional(),
  orderBy: z.union([ LeadTouchpointOrderByWithRelationInputSchema.array(),LeadTouchpointOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadTouchpointWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadTouchpointAggregateArgsSchema;
