import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { OAuthCodeListRelationFilterSchema } from './OAuthCodeListRelationFilterSchema';
import { IntegrationNullableRelationFilterSchema } from './IntegrationNullableRelationFilterSchema';
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema';

export const OAuthAppWhereUniqueInputSchema: z.ZodType<Prisma.OAuthAppWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    integrationId: z.string(),
    clientId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    integrationId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    clientId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    integrationId: z.string(),
    clientId: z.string(),
  }),
  z.object({
    integrationId: z.string(),
  }),
  z.object({
    clientId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  integrationId: z.string().optional(),
  clientId: z.string().optional(),
  AND: z.union([ z.lazy(() => OAuthAppWhereInputSchema),z.lazy(() => OAuthAppWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthAppWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthAppWhereInputSchema),z.lazy(() => OAuthAppWhereInputSchema).array() ]).optional(),
  hashedClientSecret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partialClientSecret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  redirectUris: z.lazy(() => JsonFilterSchema).optional(),
  pkce: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  oAuthCodes: z.lazy(() => OAuthCodeListRelationFilterSchema).optional(),
  integration: z.union([ z.lazy(() => IntegrationNullableRelationFilterSchema),z.lazy(() => IntegrationWhereInputSchema) ]).optional().nullable(),
}).strict());

export default OAuthAppWhereUniqueInputSchema;
