import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxStatusSchema } from './InboxStatusSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumInboxStatusNullableFilterSchema } from './NestedEnumInboxStatusNullableFilterSchema';

export const NestedEnumInboxStatusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInboxStatusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => InboxStatusSchema).optional().nullable(),
  in: z.lazy(() => InboxStatusSchema).array().optional().nullable(),
  notIn: z.lazy(() => InboxStatusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => InboxStatusSchema),z.lazy(() => NestedEnumInboxStatusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumInboxStatusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumInboxStatusNullableFilterSchema).optional()
}).strict();

export default NestedEnumInboxStatusNullableWithAggregatesFilterSchema;
