import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutOAuthCodesInputSchema } from './UserCreateNestedOneWithoutOAuthCodesInputSchema';
import { ProjectCreateNestedOneWithoutOAuthCodesInputSchema } from './ProjectCreateNestedOneWithoutOAuthCodesInputSchema';

export const OAuthCodeCreateWithoutOAuthAppInputSchema: z.ZodType<Prisma.OAuthCodeCreateWithoutOAuthAppInput> = z.object({
  id: z.string().cuid().optional(),
  code: z.string(),
  scopes: z.string().optional().nullable(),
  redirectUri: z.string(),
  codeChallenge: z.string().optional().nullable(),
  codeChallengeMethod: z.string().optional().nullable(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutOAuthCodesInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutOAuthCodesInputSchema)
}).strict();

export default OAuthCodeCreateWithoutOAuthAppInputSchema;
