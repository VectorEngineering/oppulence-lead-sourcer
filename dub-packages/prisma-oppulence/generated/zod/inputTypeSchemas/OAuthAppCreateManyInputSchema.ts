import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const OAuthAppCreateManyInputSchema: z.ZodType<Prisma.OAuthAppCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  integrationId: z.string(),
  clientId: z.string(),
  hashedClientSecret: z.string(),
  partialClientSecret: z.string(),
  redirectUris: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  pkce: z.boolean().optional()
}).strict();

export default OAuthAppCreateManyInputSchema;
