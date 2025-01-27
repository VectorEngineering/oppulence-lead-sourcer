import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { UserCreateNestedOneWithoutInstalledIntegrationsInputSchema } from './UserCreateNestedOneWithoutInstalledIntegrationsInputSchema';
import { IntegrationCreateNestedOneWithoutInstallationsInputSchema } from './IntegrationCreateNestedOneWithoutInstallationsInputSchema';
import { OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema } from './WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema';

export const InstalledIntegrationCreateWithoutProjectInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateWithoutProjectInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInstalledIntegrationsInputSchema),
  integration: z.lazy(() => IntegrationCreateNestedOneWithoutInstallationsInputSchema),
  refreshTokens: z.lazy(() => OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  webhook: z.lazy(() => WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema).optional()
}).strict();

export default InstalledIntegrationCreateWithoutProjectInputSchema;
