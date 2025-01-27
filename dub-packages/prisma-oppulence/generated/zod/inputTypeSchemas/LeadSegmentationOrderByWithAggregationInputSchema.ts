import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadSegmentationCountOrderByAggregateInputSchema } from './LeadSegmentationCountOrderByAggregateInputSchema';
import { LeadSegmentationAvgOrderByAggregateInputSchema } from './LeadSegmentationAvgOrderByAggregateInputSchema';
import { LeadSegmentationMaxOrderByAggregateInputSchema } from './LeadSegmentationMaxOrderByAggregateInputSchema';
import { LeadSegmentationMinOrderByAggregateInputSchema } from './LeadSegmentationMinOrderByAggregateInputSchema';
import { LeadSegmentationSumOrderByAggregateInputSchema } from './LeadSegmentationSumOrderByAggregateInputSchema';

export const LeadSegmentationOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadSegmentationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  industrySegment: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  geographicRegion: z.lazy(() => SortOrderSchema).optional(),
  purchaseHistory: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  productUsage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  engagementLevel: z.lazy(() => SortOrderSchema).optional(),
  decisionMaking: z.lazy(() => SortOrderSchema).optional(),
  innovationLevel: z.lazy(() => SortOrderSchema).optional(),
  riskTolerance: z.lazy(() => SortOrderSchema).optional(),
  customerLifetimeValue: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profitabilitySegment: z.lazy(() => SortOrderSchema).optional(),
  growthPotential: z.lazy(() => SortOrderSchema).optional(),
  segmentTags: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LeadSegmentationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => LeadSegmentationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LeadSegmentationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LeadSegmentationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => LeadSegmentationSumOrderByAggregateInputSchema).optional()
}).strict();

export default LeadSegmentationOrderByWithAggregationInputSchema;
