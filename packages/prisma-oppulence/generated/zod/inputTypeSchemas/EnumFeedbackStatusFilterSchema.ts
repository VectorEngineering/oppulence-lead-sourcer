import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { FeedbackStatusSchema } from './FeedbackStatusSchema';
import { NestedEnumFeedbackStatusFilterSchema } from './NestedEnumFeedbackStatusFilterSchema';

export const EnumFeedbackStatusFilterSchema: z.ZodType<Prisma.EnumFeedbackStatusFilter> = z.object({
  equals: z.lazy(() => FeedbackStatusSchema).optional(),
  in: z.lazy(() => FeedbackStatusSchema).array().optional(),
  notIn: z.lazy(() => FeedbackStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => FeedbackStatusSchema),z.lazy(() => NestedEnumFeedbackStatusFilterSchema) ]).optional(),
}).strict();

export default EnumFeedbackStatusFilterSchema;
