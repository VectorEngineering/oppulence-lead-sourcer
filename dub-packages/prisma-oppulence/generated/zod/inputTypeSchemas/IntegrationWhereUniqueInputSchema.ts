import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationWhereInputSchema } from './IntegrationWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { OAuthAppNullableRelationFilterSchema } from './OAuthAppNullableRelationFilterSchema';
import { OAuthAppWhereInputSchema } from './OAuthAppWhereInputSchema';
import { InstalledIntegrationListRelationFilterSchema } from './InstalledIntegrationListRelationFilterSchema';

export const IntegrationWhereUniqueInputSchema: z.ZodType<Prisma.IntegrationWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    slug: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => IntegrationWhereInputSchema),z.lazy(() => IntegrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => IntegrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => IntegrationWhereInputSchema),z.lazy(() => IntegrationWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  readme: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  developer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logo: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  screenshots: z.lazy(() => JsonNullableFilterSchema).optional(),
  verified: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  installUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  oAuthApp: z.union([ z.lazy(() => OAuthAppNullableRelationFilterSchema),z.lazy(() => OAuthAppWhereInputSchema) ]).optional().nullable(),
  installations: z.lazy(() => InstalledIntegrationListRelationFilterSchema).optional()
}).strict());

export default IntegrationWhereUniqueInputSchema;
