import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadExternalSystemOrderByRelevanceInputSchema } from './LeadExternalSystemOrderByRelevanceInputSchema';

export const LeadExternalSystemOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadExternalSystemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  externalId: z.lazy(() => SortOrderSchema).optional(),
  lastSynced: z.lazy(() => SortOrderSchema).optional(),
  syncStatus: z.lazy(() => SortOrderSchema).optional(),
  errorMessage: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadExternalSystemOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadExternalSystemOrderByWithRelationInputSchema;
