import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInputSchema } from './RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInputSchema';

export const OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema: z.ZodType<Prisma.OAuthRefreshTokenUpdateWithoutInstalledIntegrationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hashedRefreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accessToken: z.lazy(() => RestrictedTokenUpdateOneRequiredWithoutRefreshTokensNestedInputSchema).optional()
}).strict();

export default OAuthRefreshTokenUpdateWithoutInstalledIntegrationInputSchema;
