import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSegmentationIncludeSchema } from '../inputTypeSchemas/LeadSegmentationIncludeSchema'
import { LeadSegmentationUpdateInputSchema } from '../inputTypeSchemas/LeadSegmentationUpdateInputSchema'
import { LeadSegmentationUncheckedUpdateInputSchema } from '../inputTypeSchemas/LeadSegmentationUncheckedUpdateInputSchema'
import { LeadSegmentationWhereUniqueInputSchema } from '../inputTypeSchemas/LeadSegmentationWhereUniqueInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
import { LeadSegmentationHistoryFindManyArgsSchema } from "../outputTypeSchemas/LeadSegmentationHistoryFindManyArgsSchema"
import { LeadSegmentationCountOutputTypeArgsSchema } from "../outputTypeSchemas/LeadSegmentationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSegmentationSelectSchema: z.ZodType<Prisma.LeadSegmentationSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  industrySegment: z.boolean().optional(),
  companySize: z.boolean().optional(),
  geographicRegion: z.boolean().optional(),
  purchaseHistory: z.boolean().optional(),
  productUsage: z.boolean().optional(),
  engagementLevel: z.boolean().optional(),
  decisionMaking: z.boolean().optional(),
  innovationLevel: z.boolean().optional(),
  riskTolerance: z.boolean().optional(),
  customerLifetimeValue: z.boolean().optional(),
  profitabilitySegment: z.boolean().optional(),
  growthPotential: z.boolean().optional(),
  segmentTags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
  segmentationHistory: z.union([z.boolean(),z.lazy(() => LeadSegmentationHistoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LeadSegmentationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LeadSegmentationUpdateArgsSchema: z.ZodType<Prisma.LeadSegmentationUpdateArgs> = z.object({
  select: LeadSegmentationSelectSchema.optional(),
  include: LeadSegmentationIncludeSchema.optional(),
  data: z.union([ LeadSegmentationUpdateInputSchema,LeadSegmentationUncheckedUpdateInputSchema ]),
  where: LeadSegmentationWhereUniqueInputSchema,
}).strict() ;

export default LeadSegmentationUpdateArgsSchema;
