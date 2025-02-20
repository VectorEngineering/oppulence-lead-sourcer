import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema } from './UserUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema';
import { ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema } from './ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema';
import { OAuthRefreshTokenUpdateManyWithoutAccessTokenNestedInputSchema } from './OAuthRefreshTokenUpdateManyWithoutAccessTokenNestedInputSchema';
import { InstalledIntegrationUpdateOneWithoutAccessTokensNestedInputSchema } from './InstalledIntegrationUpdateOneWithoutAccessTokensNestedInputSchema';

export const RestrictedTokenUpdateInputSchema: z.ZodType<Prisma.RestrictedTokenUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashedKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  partialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scopes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastUsed: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rateLimit: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutRestrictedTokensNestedInputSchema).optional(),
  refreshTokens: z.lazy(() => OAuthRefreshTokenUpdateManyWithoutAccessTokenNestedInputSchema).optional(),
  installedIntegration: z.lazy(() => InstalledIntegrationUpdateOneWithoutAccessTokensNestedInputSchema).optional()
}).strict();

export default RestrictedTokenUpdateInputSchema;
