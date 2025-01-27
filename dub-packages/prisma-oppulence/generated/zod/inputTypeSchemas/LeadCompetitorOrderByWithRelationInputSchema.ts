import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadCompetitorOrderByRelevanceInputSchema } from './LeadCompetitorOrderByRelevanceInputSchema';

export const LeadCompetitorOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadCompetitorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  strengths: z.lazy(() => SortOrderSchema).optional(),
  weaknesses: z.lazy(() => SortOrderSchema).optional(),
  pricing: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  differentiator: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadCompetitorOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadCompetitorOrderByWithRelationInputSchema;
