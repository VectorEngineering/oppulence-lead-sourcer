import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { InboxRelationFilterSchema } from './InboxRelationFilterSchema';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';

export const InboxShareWhereInputSchema: z.ZodType<Prisma.InboxShareWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InboxShareWhereInputSchema),z.lazy(() => InboxShareWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InboxShareWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InboxShareWhereInputSchema),z.lazy(() => InboxShareWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inboxId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accessLevel: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  password: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccessed: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  accessCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxAccesses: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  ipRestriction: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  domainRestriction: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deviceLimit: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  requireMFA: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  notifyOnAccess: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  accessSchedule: z.lazy(() => JsonNullableFilterSchema).optional(),
  revokedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  revokedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  revokeReason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inbox: z.union([ z.lazy(() => InboxRelationFilterSchema),z.lazy(() => InboxWhereInputSchema) ]).optional(),
}).strict();

export default InboxShareWhereInputSchema;
