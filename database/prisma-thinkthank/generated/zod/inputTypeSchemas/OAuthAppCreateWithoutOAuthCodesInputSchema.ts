import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { IntegrationCreateNestedOneWithoutOAuthAppInputSchema } from './IntegrationCreateNestedOneWithoutOAuthAppInputSchema';

export const OAuthAppCreateWithoutOAuthCodesInputSchema: z.ZodType<Prisma.OAuthAppCreateWithoutOAuthCodesInput> = z.object({
  id: z.string().cuid().optional(),
  clientId: z.string(),
  hashedClientSecret: z.string(),
  partialClientSecret: z.string(),
  redirectUris: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  pkce: z.boolean().optional(),
  integration: z.lazy(() => IntegrationCreateNestedOneWithoutOAuthAppInputSchema).optional()
}).strict();

export default OAuthAppCreateWithoutOAuthCodesInputSchema;
