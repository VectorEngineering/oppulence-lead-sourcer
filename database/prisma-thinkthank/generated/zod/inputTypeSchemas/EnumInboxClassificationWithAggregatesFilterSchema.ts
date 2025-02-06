import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InboxClassificationSchema } from './InboxClassificationSchema';
import { NestedEnumInboxClassificationWithAggregatesFilterSchema } from './NestedEnumInboxClassificationWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumInboxClassificationFilterSchema } from './NestedEnumInboxClassificationFilterSchema';

export const EnumInboxClassificationWithAggregatesFilterSchema: z.ZodType<Prisma.EnumInboxClassificationWithAggregatesFilter> = z.object({
  equals: z.lazy(() => InboxClassificationSchema).optional(),
  in: z.lazy(() => InboxClassificationSchema).array().optional(),
  notIn: z.lazy(() => InboxClassificationSchema).array().optional(),
  not: z.union([ z.lazy(() => InboxClassificationSchema),z.lazy(() => NestedEnumInboxClassificationWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumInboxClassificationFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumInboxClassificationFilterSchema).optional()
}).strict();

export default EnumInboxClassificationWithAggregatesFilterSchema;
