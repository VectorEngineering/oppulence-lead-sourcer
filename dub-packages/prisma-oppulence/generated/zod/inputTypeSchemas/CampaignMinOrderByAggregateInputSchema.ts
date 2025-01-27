import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CampaignMinOrderByAggregateInputSchema: z.ZodType<Prisma.CampaignMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  budget: z.lazy(() => SortOrderSchema).optional(),
  actualSpend: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.lazy(() => SortOrderSchema).optional(),
  impressions: z.lazy(() => SortOrderSchema).optional(),
  clicks: z.lazy(() => SortOrderSchema).optional(),
  conversions: z.lazy(() => SortOrderSchema).optional(),
  revenue: z.lazy(() => SortOrderSchema).optional(),
  roi: z.lazy(() => SortOrderSchema).optional(),
  utmSource: z.lazy(() => SortOrderSchema).optional(),
  utmMedium: z.lazy(() => SortOrderSchema).optional(),
  utmCampaign: z.lazy(() => SortOrderSchema).optional(),
  utmContent: z.lazy(() => SortOrderSchema).optional(),
  utmTerm: z.lazy(() => SortOrderSchema).optional(),
  abTestEnabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CampaignMinOrderByAggregateInputSchema;
