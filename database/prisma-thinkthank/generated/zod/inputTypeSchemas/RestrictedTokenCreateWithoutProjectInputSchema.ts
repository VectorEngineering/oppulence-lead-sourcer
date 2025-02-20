import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRestrictedTokensInputSchema } from './UserCreateNestedOneWithoutRestrictedTokensInputSchema';
import { OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema';
import { InstalledIntegrationCreateNestedOneWithoutAccessTokensInputSchema } from './InstalledIntegrationCreateNestedOneWithoutAccessTokensInputSchema';

export const RestrictedTokenCreateWithoutProjectInputSchema: z.ZodType<Prisma.RestrictedTokenCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  hashedKey: z.string(),
  partialKey: z.string(),
  scopes: z.string().optional().nullable(),
  expires: z.coerce.date().optional().nullable(),
  lastUsed: z.coerce.date().optional().nullable(),
  rateLimit: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutRestrictedTokensInputSchema),
  refreshTokens: z.lazy(() => OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema).optional(),
  installedIntegration: z.lazy(() => InstalledIntegrationCreateNestedOneWithoutAccessTokensInputSchema).optional()
}).strict();

export default RestrictedTokenCreateWithoutProjectInputSchema;
