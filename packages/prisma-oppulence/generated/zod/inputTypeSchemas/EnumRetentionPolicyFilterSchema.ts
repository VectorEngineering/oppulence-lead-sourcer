import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RetentionPolicySchema } from './RetentionPolicySchema';
import { NestedEnumRetentionPolicyFilterSchema } from './NestedEnumRetentionPolicyFilterSchema';

export const EnumRetentionPolicyFilterSchema: z.ZodType<Prisma.EnumRetentionPolicyFilter> = z.object({
  equals: z.lazy(() => RetentionPolicySchema).optional(),
  in: z.lazy(() => RetentionPolicySchema).array().optional(),
  notIn: z.lazy(() => RetentionPolicySchema).array().optional(),
  not: z.union([ z.lazy(() => RetentionPolicySchema),z.lazy(() => NestedEnumRetentionPolicyFilterSchema) ]).optional(),
}).strict();

export default EnumRetentionPolicyFilterSchema;
