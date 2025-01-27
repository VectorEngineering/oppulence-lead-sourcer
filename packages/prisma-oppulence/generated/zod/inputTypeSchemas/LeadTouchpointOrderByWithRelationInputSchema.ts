import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { CampaignOrderByRelationAggregateInputSchema } from './CampaignOrderByRelationAggregateInputSchema';
import { LeadTouchpointOrderByRelevanceInputSchema } from './LeadTouchpointOrderByRelevanceInputSchema';

export const LeadTouchpointOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadTouchpointOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  channel: z.lazy(() => SortOrderSchema).optional(),
  campaign: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  interaction: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  timestamp: z.lazy(() => SortOrderSchema).optional(),
  isFirstTouch: z.lazy(() => SortOrderSchema).optional(),
  isLastTouch: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  Campaign: z.lazy(() => CampaignOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => LeadTouchpointOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadTouchpointOrderByWithRelationInputSchema;
