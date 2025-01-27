import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema } from './InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema';

export const OAuthRefreshTokenCreateWithoutAccessTokenInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateWithoutAccessTokenInput> = z.object({
  id: z.string().cuid().optional(),
  hashedRefreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  installedIntegration: z.lazy(() => InstalledIntegrationCreateNestedOneWithoutRefreshTokensInputSchema)
}).strict();

export default OAuthRefreshTokenCreateWithoutAccessTokenInputSchema;
