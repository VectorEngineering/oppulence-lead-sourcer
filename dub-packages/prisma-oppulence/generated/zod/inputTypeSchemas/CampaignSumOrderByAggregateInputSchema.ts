import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CampaignSumOrderByAggregateInputSchema: z.ZodType<Prisma.CampaignSumOrderByAggregateInput> = z.object({
  budget: z.lazy(() => SortOrderSchema).optional(),
  actualSpend: z.lazy(() => SortOrderSchema).optional(),
  impressions: z.lazy(() => SortOrderSchema).optional(),
  clicks: z.lazy(() => SortOrderSchema).optional(),
  conversions: z.lazy(() => SortOrderSchema).optional(),
  revenue: z.lazy(() => SortOrderSchema).optional(),
  roi: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CampaignSumOrderByAggregateInputSchema;
