import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthCodeFindManyArgsSchema } from "../outputTypeSchemas/OAuthCodeFindManyArgsSchema"
import { IntegrationArgsSchema } from "../outputTypeSchemas/IntegrationArgsSchema"
import { OAuthAppCountOutputTypeArgsSchema } from "../outputTypeSchemas/OAuthAppCountOutputTypeArgsSchema"

export const OAuthAppSelectSchema: z.ZodType<Prisma.OAuthAppSelect> = z.object({
  id: z.boolean().optional(),
  integrationId: z.boolean().optional(),
  clientId: z.boolean().optional(),
  hashedClientSecret: z.boolean().optional(),
  partialClientSecret: z.boolean().optional(),
  redirectUris: z.boolean().optional(),
  pkce: z.boolean().optional(),
  oAuthCodes: z.union([z.boolean(),z.lazy(() => OAuthCodeFindManyArgsSchema)]).optional(),
  integration: z.union([z.boolean(),z.lazy(() => IntegrationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OAuthAppCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OAuthAppSelectSchema;
