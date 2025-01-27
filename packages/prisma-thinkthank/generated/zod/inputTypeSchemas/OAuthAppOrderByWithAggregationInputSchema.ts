import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OAuthAppCountOrderByAggregateInputSchema } from './OAuthAppCountOrderByAggregateInputSchema';
import { OAuthAppMaxOrderByAggregateInputSchema } from './OAuthAppMaxOrderByAggregateInputSchema';
import { OAuthAppMinOrderByAggregateInputSchema } from './OAuthAppMinOrderByAggregateInputSchema';

export const OAuthAppOrderByWithAggregationInputSchema: z.ZodType<Prisma.OAuthAppOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  integrationId: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  hashedClientSecret: z.lazy(() => SortOrderSchema).optional(),
  partialClientSecret: z.lazy(() => SortOrderSchema).optional(),
  redirectUris: z.lazy(() => SortOrderSchema).optional(),
  pkce: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OAuthAppCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OAuthAppMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OAuthAppMinOrderByAggregateInputSchema).optional()
}).strict();

export default OAuthAppOrderByWithAggregationInputSchema;
