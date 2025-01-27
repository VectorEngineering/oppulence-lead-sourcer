import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationHistoryIncludeSchema } from '../inputTypeSchemas/LeadSegmentationHistoryIncludeSchema'
import { LeadSegmentationHistoryWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationHistoryWhereUniqueInputSchema'
import { LeadSegmentationArgsSchema } from "../outputTypeSchemas/LeadSegmentationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSegmentationHistorySelectSchema: z.ZodType<Prisma.LeadSegmentationHistorySelect> = z.object({
  id: z.boolean().optional(),
  segmentationId: z.boolean().optional(),
  previousSegments: z.boolean().optional(),
  newSegments: z.boolean().optional(),
  reason: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  segmentation: z.union([z.boolean(),z.lazy(() => LeadSegmentationArgsSchema)]).optional(),
}).strict()

export const LeadSegmentationHistoryFindUniqueArgsSchema: z.ZodType<Prisma.LeadSegmentationHistoryFindUniqueArgs> = z.object({
  select: LeadSegmentationHistorySelectSchema.optional(),
  include: LeadSegmentationHistoryIncludeSchema.optional(),
  where: LeadSegmentationHistoryWhereUniqueInputSchema,
}).strict() ;

export default LeadSegmentationHistoryFindUniqueArgsSchema;
