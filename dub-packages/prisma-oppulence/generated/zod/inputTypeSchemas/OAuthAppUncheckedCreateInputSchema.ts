import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema } from './OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema';

export const OAuthAppUncheckedCreateInputSchema: z.ZodType<Prisma.OAuthAppUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  integrationId: z.string(),
  clientId: z.string(),
  hashedClientSecret: z.string(),
  partialClientSecret: z.string(),
  redirectUris: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  pkce: z.boolean().optional(),
  oAuthCodes: z.lazy(() => OAuthCodeUncheckedCreateNestedManyWithoutOAuthAppInputSchema).optional()
}).strict();

export default OAuthAppUncheckedCreateInputSchema;
