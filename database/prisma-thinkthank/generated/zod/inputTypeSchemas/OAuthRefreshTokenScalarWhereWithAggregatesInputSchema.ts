import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const OAuthRefreshTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OAuthRefreshTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OAuthRefreshTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => OAuthRefreshTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthRefreshTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthRefreshTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => OAuthRefreshTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  installationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  accessTokenId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hashedRefreshToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default OAuthRefreshTokenScalarWhereWithAggregatesInputSchema;
