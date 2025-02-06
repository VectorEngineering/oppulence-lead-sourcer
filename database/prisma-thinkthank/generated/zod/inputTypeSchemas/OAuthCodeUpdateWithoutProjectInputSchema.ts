import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInputSchema } from './OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInputSchema';
import { UserUpdateOneRequiredWithoutOAuthCodesNestedInputSchema } from './UserUpdateOneRequiredWithoutOAuthCodesNestedInputSchema';

export const OAuthCodeUpdateWithoutProjectInputSchema: z.ZodType<Prisma.OAuthCodeUpdateWithoutProjectInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scopes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  redirectUri: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  codeChallenge: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  codeChallengeMethod: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  oAuthApp: z.lazy(() => OAuthAppUpdateOneRequiredWithoutOAuthCodesNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutOAuthCodesNestedInputSchema).optional()
}).strict();

export default OAuthCodeUpdateWithoutProjectInputSchema;
