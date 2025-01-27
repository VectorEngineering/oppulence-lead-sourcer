import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountSubTypeSchema } from './AccountSubTypeSchema';
import { NestedEnumAccountSubTypeNullableFilterSchema } from './NestedEnumAccountSubTypeNullableFilterSchema';

export const EnumAccountSubTypeNullableFilterSchema: z.ZodType<Prisma.EnumAccountSubTypeNullableFilter> = z.object({
  equals: z.lazy(() => AccountSubTypeSchema).optional().nullable(),
  in: z.lazy(() => AccountSubTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => AccountSubTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AccountSubTypeSchema),z.lazy(() => NestedEnumAccountSubTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumAccountSubTypeNullableFilterSchema;
