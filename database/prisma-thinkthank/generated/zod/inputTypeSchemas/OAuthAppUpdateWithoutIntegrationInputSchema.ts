import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OAuthCodeUpdateManyWithoutOAuthAppNestedInputSchema } from './OAuthCodeUpdateManyWithoutOAuthAppNestedInputSchema';

export const OAuthAppUpdateWithoutIntegrationInputSchema: z.ZodType<Prisma.OAuthAppUpdateWithoutIntegrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashedClientSecret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  partialClientSecret: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  redirectUris: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  pkce: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeUpdateManyWithoutOAuthAppNestedInputSchema).optional()
}).strict();

export default OAuthAppUpdateWithoutIntegrationInputSchema;
