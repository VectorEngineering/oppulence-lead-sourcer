import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadContactPreferenceOrderByRelevanceInputSchema } from './LeadContactPreferenceOrderByRelevanceInputSchema';

export const LeadContactPreferenceOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadContactPreferenceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  method: z.lazy(() => SortOrderSchema).optional(),
  preferredTime: z.lazy(() => SortOrderSchema).optional(),
  preferredDays: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadContactPreferenceOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadContactPreferenceOrderByWithRelationInputSchema;
