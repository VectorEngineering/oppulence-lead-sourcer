import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CampaignVariantCountOrderByAggregateInputSchema: z.ZodType<Prisma.CampaignVariantCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  campaignId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  metrics: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CampaignVariantCountOrderByAggregateInputSchema;
