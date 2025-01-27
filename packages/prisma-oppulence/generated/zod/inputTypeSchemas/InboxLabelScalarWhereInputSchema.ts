import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const InboxLabelScalarWhereInputSchema: z.ZodType<Prisma.InboxLabelScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InboxLabelScalarWhereInputSchema),z.lazy(() => InboxLabelScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InboxLabelScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InboxLabelScalarWhereInputSchema),z.lazy(() => InboxLabelScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  inboxId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  icon: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  category: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  isSystem: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  validFrom: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  validUntil: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  updatedBy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default InboxLabelScalarWhereInputSchema;
