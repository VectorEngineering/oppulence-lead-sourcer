import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EndpointOrderByWithRelationInputSchema } from './EndpointOrderByWithRelationInputSchema';
import { LeadOrderByRelevanceInputSchema } from './LeadOrderByRelevanceInputSchema';

export const LeadOrderByWithRelationInputSchema: z.ZodType<Prisma.LeadOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  endpointId: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  endpoint: z.lazy(() => EndpointOrderByWithRelationInputSchema).optional(),
  _relevance: z.lazy(() => LeadOrderByRelevanceInputSchema).optional()
}).strict();

export default LeadOrderByWithRelationInputSchema;
