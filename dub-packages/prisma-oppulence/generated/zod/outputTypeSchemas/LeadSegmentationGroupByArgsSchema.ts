import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereInputSchema'
import { LeadSegmentationOrderByWithAggregationInputSchema } from '../inputTypeSchemas/LeadSegmentationOrderByWithAggregationInputSchema'
import { LeadSegmentationScalarFieldEnumSchema } from '../inputTypeSchemas/LeadSegmentationScalarFieldEnumSchema'
import { LeadSegmentationScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/LeadSegmentationScalarWhereWithAggregatesInputSchema'

export const LeadSegmentationGroupByArgsSchema: z.ZodType<Prisma.LeadSegmentationGroupByArgs> = z.object({
  where: LeadSegmentationWhereInputSchema.optional(),
  orderBy: z.union([ LeadSegmentationOrderByWithAggregationInputSchema.array(),LeadSegmentationOrderByWithAggregationInputSchema ]).optional(),
  by: LeadSegmentationScalarFieldEnumSchema.array(),
  having: LeadSegmentationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadSegmentationGroupByArgsSchema;
