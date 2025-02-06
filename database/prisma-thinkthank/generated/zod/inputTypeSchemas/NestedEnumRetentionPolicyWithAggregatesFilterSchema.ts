import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RetentionPolicySchema } from './RetentionPolicySchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumRetentionPolicyFilterSchema } from './NestedEnumRetentionPolicyFilterSchema';

export const NestedEnumRetentionPolicyWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumRetentionPolicyWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RetentionPolicySchema).optional(),
  in: z.lazy(() => RetentionPolicySchema).array().optional(),
  notIn: z.lazy(() => RetentionPolicySchema).array().optional(),
  not: z.union([ z.lazy(() => RetentionPolicySchema),z.lazy(() => NestedEnumRetentionPolicyWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRetentionPolicyFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRetentionPolicyFilterSchema).optional()
}).strict();

export default NestedEnumRetentionPolicyWithAggregatesFilterSchema;
