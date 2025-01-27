import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const OAuthCodeScalarWhereInputSchema: z.ZodType<Prisma.OAuthCodeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OAuthCodeScalarWhereInputSchema),z.lazy(() => OAuthCodeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OAuthCodeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OAuthCodeScalarWhereInputSchema),z.lazy(() => OAuthCodeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  code: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scopes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  redirectUri: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  codeChallenge: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  codeChallengeMethod: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default OAuthCodeScalarWhereInputSchema;
