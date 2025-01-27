import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LeadSegmentationCreateManyInputSchema: z.ZodType<Prisma.LeadSegmentationCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  leadId: z.string(),
  industrySegment: z.string(),
  companySize: z.string(),
  geographicRegion: z.string(),
  purchaseHistory: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  productUsage: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  engagementLevel: z.string(),
  decisionMaking: z.string(),
  innovationLevel: z.string(),
  riskTolerance: z.string(),
  customerLifetimeValue: z.number().optional().nullable(),
  profitabilitySegment: z.string(),
  growthPotential: z.string(),
  segmentTags: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default LeadSegmentationCreateManyInputSchema;
