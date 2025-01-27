import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';

export const InboxActivityScalarWhereInputSchema: z.ZodType<Prisma.InboxActivityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InboxActivityScalarWhereInputSchema),z.lazy(() => InboxActivityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InboxActivityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InboxActivityScalarWhereInputSchema),z.lazy(() => InboxActivityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inboxId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ipAddress: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  userAgent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  sessionId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  requestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  success: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  errorDetails: z.lazy(() => JsonNullableFilterSchema).optional(),
  severity: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  source: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  deviceInfo: z.lazy(() => JsonNullableFilterSchema).optional(),
  riskScore: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default InboxActivityScalarWhereInputSchema;
