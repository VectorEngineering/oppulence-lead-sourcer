import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogTypeSchema } from './LogTypeSchema';
import { NestedEnumLogTypeNullableFilterSchema } from './NestedEnumLogTypeNullableFilterSchema';

export const EnumLogTypeNullableFilterSchema: z.ZodType<Prisma.EnumLogTypeNullableFilter> = z.object({
  equals: z.lazy(() => LogTypeSchema).optional().nullable(),
  in: z.lazy(() => LogTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => LogTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => LogTypeSchema),z.lazy(() => NestedEnumLogTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumLogTypeNullableFilterSchema;
