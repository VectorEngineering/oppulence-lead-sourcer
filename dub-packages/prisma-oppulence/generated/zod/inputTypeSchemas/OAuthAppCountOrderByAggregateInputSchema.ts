import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OAuthAppCountOrderByAggregateInputSchema: z.ZodType<Prisma.OAuthAppCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  integrationId: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  hashedClientSecret: z.lazy(() => SortOrderSchema).optional(),
  partialClientSecret: z.lazy(() => SortOrderSchema).optional(),
  redirectUris: z.lazy(() => SortOrderSchema).optional(),
  pkce: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OAuthAppCountOrderByAggregateInputSchema;
