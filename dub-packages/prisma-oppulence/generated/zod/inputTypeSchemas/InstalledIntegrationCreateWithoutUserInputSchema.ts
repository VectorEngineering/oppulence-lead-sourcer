import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { IntegrationCreateNestedOneWithoutInstallationsInputSchema } from './IntegrationCreateNestedOneWithoutInstallationsInputSchema';
import { ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema } from './ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema';
import { OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema } from './RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema';
import { WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema } from './WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema';

export const InstalledIntegrationCreateWithoutUserInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  credentials: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  integration: z.lazy(() => IntegrationCreateNestedOneWithoutInstallationsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutInstalledIntegrationsInputSchema),
  refreshTokens: z.lazy(() => OAuthRefreshTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  accessTokens: z.lazy(() => RestrictedTokenCreateNestedManyWithoutInstalledIntegrationInputSchema).optional(),
  webhook: z.lazy(() => WebhookCreateNestedOneWithoutInstalledIntegrationInputSchema).optional()
}).strict();

export default InstalledIntegrationCreateWithoutUserInputSchema;
