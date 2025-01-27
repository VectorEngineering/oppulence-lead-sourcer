import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OAuthRefreshTokenCreateManyInputSchema: z.ZodType<Prisma.OAuthRefreshTokenCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  installationId: z.string(),
  accessTokenId: z.string(),
  hashedRefreshToken: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default OAuthRefreshTokenCreateManyInputSchema;
