import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogTypeSchema } from './LogTypeSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumLogTypeNullableFilterSchema } from './NestedEnumLogTypeNullableFilterSchema';

export const NestedEnumLogTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLogTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LogTypeSchema).optional().nullable(),
  in: z.lazy(() => LogTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => LogTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => LogTypeSchema),z.lazy(() => NestedEnumLogTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLogTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLogTypeNullableFilterSchema).optional()
}).strict();

export default NestedEnumLogTypeNullableWithAggregatesFilterSchema;
