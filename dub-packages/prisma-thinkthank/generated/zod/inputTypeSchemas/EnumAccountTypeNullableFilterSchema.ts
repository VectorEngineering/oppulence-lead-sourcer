import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountTypeSchema } from './AccountTypeSchema';
import { NestedEnumAccountTypeNullableFilterSchema } from './NestedEnumAccountTypeNullableFilterSchema';

export const EnumAccountTypeNullableFilterSchema: z.ZodType<Prisma.EnumAccountTypeNullableFilter> = z.object({
  equals: z.lazy(() => AccountTypeSchema).optional().nullable(),
  in: z.lazy(() => AccountTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => AccountTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AccountTypeSchema),z.lazy(() => NestedEnumAccountTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumAccountTypeNullableFilterSchema;
