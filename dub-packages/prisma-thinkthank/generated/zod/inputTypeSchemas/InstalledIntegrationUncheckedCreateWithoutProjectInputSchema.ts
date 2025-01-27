import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema } from './RestrictedTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema } from './WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema';

export const InstalledIntegrationUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationUncheckedCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  integrationId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  refreshTokens: z.lazy(() => OAuthRefreshTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenUncheckedCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  webhook: z.lazy(() => WebhookUncheckedCreateNestedOneWithoutInstalledIntegrationInputSchema).optional()
}).strict();

export default InstalledIntegrationUncheckedCreateWithoutProjectInputSchema;
