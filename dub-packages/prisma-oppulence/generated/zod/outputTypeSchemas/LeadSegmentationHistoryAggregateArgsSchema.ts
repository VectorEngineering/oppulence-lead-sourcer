import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationHistoryWhereInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereInputSchema'
import { LeadSegmentationHistoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryOrderByWithRelationInputSchema'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereUniqueInputSchema'

export const LeadSegmentationHistoryAggregateArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryAggregateArgs> = z.object({
  where: LeadSegmentationHistoryWhereInputSchema.optional(),
  orderBy: z.union([ LeadSegmentationHistoryOrderByWithRelationInputSchema.array(),LeadSegmentationHistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: LeadSegmentationHistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default LeadSegmentationHistoryAggregateArgsSchema;
