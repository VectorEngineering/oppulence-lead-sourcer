import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RestrictedTokenScalarWhereInputSchema: z.ZodType<Prisma.RestrictedTokenScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RestrictedTokenScalarWhereInputSchema),z.lazy(() => RestrictedTokenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RestrictedTokenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RestrictedTokenScalarWhereInputSchema),z.lazy(() => RestrictedTokenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hashedKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  partialKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scopes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  lastUsed: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  rateLimit: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  installationId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default RestrictedTokenScalarWhereInputSchema;
