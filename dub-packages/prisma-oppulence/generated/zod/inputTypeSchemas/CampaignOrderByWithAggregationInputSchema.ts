import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CampaignCountOrderByAggregateInputSchema } from './CampaignCountOrderByAggregateInputSchema';
import { CampaignAvgOrderByAggregateInputSchema } from './CampaignAvgOrderByAggregateInputSchema';
import { CampaignMaxOrderByAggregateInputSchema } from './CampaignMaxOrderByAggregateInputSchema';
import { CampaignMinOrderByAggregateInputSchema } from './CampaignMinOrderByAggregateInputSchema';
import { CampaignSumOrderByAggregateInputSchema } from './CampaignSumOrderByAggregateInputSchema';

export const CampaignOrderByWithAggregationInputSchema: z.ZodType<Prisma.CampaignOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  budget: z.lazy(() => SortOrderSchema).optional(),
  actualSpend: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  impressions: z.lazy(() => SortOrderSchema).optional(),
  clicks: z.lazy(() => SortOrderSchema).optional(),
  conversions: z.lazy(() => SortOrderSchema).optional(),
  revenue: z.lazy(() => SortOrderSchema).optional(),
  roi: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utmSource: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utmMedium: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utmCampaign: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utmContent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  utmTerm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  abTestEnabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CampaignCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CampaignAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CampaignMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CampaignMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CampaignSumOrderByAggregateInputSchema).optional()
}).strict();

export default CampaignOrderByWithAggregationInputSchema;
