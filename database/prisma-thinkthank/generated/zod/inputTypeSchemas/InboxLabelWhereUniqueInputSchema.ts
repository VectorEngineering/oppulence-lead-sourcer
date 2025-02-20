import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxLabelInboxIdNameCompoundUniqueInputSchema } from './InboxLabelInboxIdNameCompoundUniqueInputSchema';
import { InboxLabelWhereInputSchema } from './InboxLabelWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { InboxRelationFilterSchema } from './InboxRelationFilterSchema';
import { InboxWhereInputSchema } from './InboxWhereInputSchema';

export const InboxLabelWhereUniqueInputSchema: z.ZodType<Prisma.InboxLabelWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    inboxId_name: z.lazy(() => InboxLabelInboxIdNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    inboxId_name: z.lazy(() => InboxLabelInboxIdNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  inboxId_name: z.lazy(() => InboxLabelInboxIdNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => InboxLabelWhereInputSchema),z.lazy(() => InboxLabelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InboxLabelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InboxLabelWhereInputSchema),z.lazy(() => InboxLabelWhereInputSchema).array() ]).optional(),
  inboxId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  isSystem: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  validFrom: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  validUntil: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  inbox: z.union([ z.lazy(() => InboxRelationFilterSchema),z.lazy(() => InboxWhereInputSchema) ]).optional(),
}).strict());

export default InboxLabelWhereUniqueInputSchema;
