import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutRestrictedTokensInputSchema } from './UserCreateNestedOneWithoutRestrictedTokensInputSchema';
import { ProjectCreateNestedOneWithoutRestrictedTokensInputSchema } from './ProjectCreateNestedOneWithoutRestrictedTokensInputSchema';
import { OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema } from './OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema';

export const RestrictedTokenCreateWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.RestrictedTokenCreateWithoutInstalledIntegrationInput> = z.object({
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
  project: z.lazy(() => ProjectCreateNestedOneWithoutRestrictedTokensInputSchema),
  refreshTokens: z.lazy(() => OAuthRefreshTokenCreateNestedManyWithoutAccessTokenInputSchema).optional()
}).strict();

export default RestrictedTokenCreateWithoutInstalledIntegrationInputSchema;
