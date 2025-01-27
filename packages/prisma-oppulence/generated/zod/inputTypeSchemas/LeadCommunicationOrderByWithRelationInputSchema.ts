import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadCommunicationOrderByRelevanceInputSchema } from './LeadCommunicationOrderByRelevanceInputSchema';

export const LeadCommunicationOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadCommunicationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  direction: z.lazy(() => SortOrderSchema).optional(),
  subject: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  outcome: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scheduledAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadCommunicationOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadCommunicationOrderByWithRelationInputSchema;
