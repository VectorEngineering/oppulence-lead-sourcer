import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthRefreshTokenWhereInputSchema } from './OAuthRefreshTokenWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { RestrictedTokenRelationFilterSchema } from './RestrictedTokenRelationFilterSchema';
import { RestrictedTokenWhereInputSchema } from './RestrictedTokenWhereInputSchema';
import { InstalledIntegrationRelationFilterSchema } from './InstalledIntegrationRelationFilterSchema';
import { InstalledIntegrationWhereInputSchema } from './InstalledIntegrationWhereInputSchema';

export const OAuthRefreshTokenWhereUniqueInputSchema: z.ZodType<Prisma.OAuthRefreshTokenWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    hashedRefreshToken: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    hashedRefreshToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  hashedRefreshToken: z.string().optional(),
  AND: z.union([ z.lazy(() => OAuthRefreshTokenWhereInputSchema),z.lazy(() => OAuthRefreshTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthRefreshTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthRefreshTokenWhereInputSchema),z.lazy(() => OAuthRefreshTokenWhereInputSchema).array() ]).optional(),
  installationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  accessTokenId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accessToken: z.union([ z.lazy(() => RestrictedTokenRelationFilterSchema),z.lazy(() => RestrictedTokenWhereInputSchema) ]).optional(),
  installedIntegration: z.union([ z.lazy(() => InstalledIntegrationRelationFilterSchema),z.lazy(() => InstalledIntegrationWhereInputSchema) ]).optional(),
}).strict());

export default OAuthRefreshTokenWhereUniqueInputSchema;
