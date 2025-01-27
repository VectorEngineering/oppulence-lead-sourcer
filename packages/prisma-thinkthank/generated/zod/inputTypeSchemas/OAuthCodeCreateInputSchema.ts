import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema } from './OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema';
import { UserCreateNestedOneWithoutOAuthCodesInputSchema } from './UserCreateNestedOneWithoutOAuthCodesInputSchema';
import { ProjectCreateNestedOneWithoutOAuthCodesInputSchema } from './ProjectCreateNestedOneWithoutOAuthCodesInputSchema';

export const OAuthCodeCreateInputSchema: z.ZodType<Prisma.OAuthCodeCreateInput> = z.object({
  id: z.string().cuid().optional(),
  code: z.string(),
  scopes: z.string().optional().nullable(),
  redirectUri: z.string(),
  codeChallenge: z.string().optional().nullable(),
  codeChallengeMethod: z.string().optional().nullable(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  oAuthApp: z.lazy(() => OAuthAppCreateNestedOneWithoutOAuthCodesInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutOAuthCodesInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutOAuthCodesInputSchema)
}).strict();

export default OAuthCodeCreateInputSchema;
