import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { UserCreateNestedOneWithoutInstalledIntegrationsInputSchema } from './UserCreateNestedOneWithoutInstalledIntegrationsInputSchema';
import { ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema } from './ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema';
import { OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema } from './WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema';

export const InstalledIntegrationCreateWithoutIntegrationInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateWithoutIntegrationInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutInstalledIntegrationsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema),
  refreshTokens: z.lazy(() => OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  webhook: z.lazy(() => WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema).optional()
}).strict();

export default InstalledIntegrationCreateWithoutIntegrationInputSchema;
