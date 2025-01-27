import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTouchpointWhereInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereInputSchema'
import { LeadTouchpointOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadTouchpointOrderByWithAggregationInputSchema'
import { LeadTouchpointScalarFieldEnumSchema } from '../inputTypeSchemas/LeadTouchpointScalarFieldEnumSchema'
import { LeadTouchpointScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadTouchpointScalarWhereWithAggregatesInputSchema'

export const LeadTouchpointGroupByArgsSchema: z.ZodType<Prisma.LeadTouchpointGroupByArgs> = z.object({
  where: LeadTouchpointWhereInputSchema.optional(),
  orderBy: z.union([ LeadTouchpointOrderByWithAggregationInputSchema.array(),LeadTouchpointOrderByWithAggregationInputSchema ]).optional(),
  by: LeadTouchpointScalarFieldEnumSchema.array(),
  having: LeadTouchpointScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadTouchpointGroupByArgsSchema;
