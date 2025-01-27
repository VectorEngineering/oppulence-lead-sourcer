import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OAuthCodeCountOrderByAggregateInputSchema } from './OAuthCodeCountOrderByAggregateInputSchema';
import { OAuthCodeMaxOrderByAggregateInputSchema } from './OAuthCodeMaxOrderByAggregateInputSchema';
import { OAuthCodeMinOrderByAggregateInputSchema } from './OAuthCodeMinOrderByAggregateInputSchema';

export const OAuthCodeOrderByWithAggregationInputSchema: z.ZodType<Prisma.OAuthCodeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  code: z.lazy(() => SortOrderSchema).optional(),
  scopes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  redirectUri: z.lazy(() => SortOrderSchema).optional(),
  codeChallenge: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  codeChallengeMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OAuthCodeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OAuthCodeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OAuthCodeMinOrderByAggregateInputSchema).optional()
}).strict();

export default OAuthCodeOrderByWithAggregationInputSchema;
