import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { FloatNullableWithAggregatesFilterSchema } from './FloatNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadSegmentationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadSegmentationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadSegmentationScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSegmentationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadSegmentationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadSegmentationScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSegmentationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  industrySegment: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companySize: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  geographicRegion: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  purchaseHistory: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  productUsage: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  engagementLevel: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  decisionMaking: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  innovationLevel: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  riskTolerance: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  customerLifetimeValue: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  profitabilitySegment: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  growthPotential: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  segmentTags: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadSegmentationScalarWhereWithAggregatesInputSchema;
