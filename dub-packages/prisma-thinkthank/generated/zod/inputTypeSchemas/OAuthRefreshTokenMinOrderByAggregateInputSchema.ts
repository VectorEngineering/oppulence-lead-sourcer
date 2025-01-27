import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OAuthRefreshTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.OAuthRefreshTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  installationId: z.lazy(() => SortOrderSchema).optional(),
  accessTokenId: z.lazy(() => SortOrderSchema).optional(),
  hashedRefreshToken: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OAuthRefreshTokenMinOrderByAggregateInputSchema;
