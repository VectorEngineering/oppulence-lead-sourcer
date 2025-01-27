import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LeadOrderByWithRelationInputSchema } from './LeadOrderByWithRelationInputSchema';
import { LeadMetadataOrderByRelevanceInputSchema } from './LeadMetadataOrderByRelevanceInputSchema';

export const LeadMetadataOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadMetadataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  leadId: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  category: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isSearchable: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lead: z.lazy(() => LeadOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadMetadataOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadMetadataOrderByWithRelationInputSchema;
