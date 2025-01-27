import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeedbackStatusSchema } from './FeedbackStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumFeedbackStatusFilterSchema } from './NestedEnumFeedbackStatusFilterSchema';

export const NestedEnumFeedbackStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumFeedbackStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => FeedbackStatusSchema).optional(),
  in: z.lazy(() => FeedbackStatusSchema).array().optional(),
  notIn: z.lazy(() => FeedbackStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FeedbackStatusSchema),z.lazy(() => NestedEnumFeedbackStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumFeedbackStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumFeedbackStatusFilterSchema).optional()
}).strict();

export default NestedEnumFeedbackStatusWithAggregatesFilterSchema;
