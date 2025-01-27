import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CampaignOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CampaignOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CampaignOrderByRelationAggregateInputSchema;
