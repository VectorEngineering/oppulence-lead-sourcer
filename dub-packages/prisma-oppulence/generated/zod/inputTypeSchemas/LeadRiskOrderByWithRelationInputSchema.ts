import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadRiskOrderByRelevanceInputSchema } from './LeadRiskOrderByRelevanceInputSchema';

export const LeadRiskOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadRiskOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  impact: z.lazy(() => SortOrderSchema).optional(),
  probability: z.lazy(() => SortOrderSchema).optional(),
  mitigation: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadRiskOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadRiskOrderByWithRelationInputSchema;
