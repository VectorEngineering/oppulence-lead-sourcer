import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { LeadOrderByRelationAggregateInputSchema } from './LeadOrderByRelationAggregateInputSchema';
import { LogOrderByRelationAggregateInputSchema } from './LogOrderByRelationAggregateInputSchema';
import { EndpointOrderByRelevanceInputSchema } from './EndpointOrderByRelevanceInputSchema';

export const EndpointOrderByWithRelationInputSchema: z.ZodType<Prisma.EndpointOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  schema: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  webhookEnabled: z.lazy(() => SortOrderSchema).optional(),
  emailNotify: z.lazy(() => SortOrderSchema).optional(),
  webhook: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  formEnabled: z.lazy(() => SortOrderSchema).optional(),
  successUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  failUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  leads: z.lazy(() => LeadOrderByRelationAggregateInputSchema).optional(),
  logs: z.lazy(() => LogOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => EndpointOrderByRelevanceInputSchema).optional()
}).strict();

export default EndpointOrderByWithRelationInputSchema;
