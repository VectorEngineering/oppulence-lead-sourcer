import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';
import { NestedEnumAccountOwnershipTypeNullableWithAggregatesFilterSchema } from './NestedEnumAccountOwnershipTypeNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumAccountOwnershipTypeNullableFilterSchema } from './NestedEnumAccountOwnershipTypeNullableFilterSchema';

export const EnumAccountOwnershipTypeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAccountOwnershipTypeNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AccountOwnershipTypeSchema).optional().nullable(),
  in: z.lazy(() => AccountOwnershipTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => AccountOwnershipTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AccountOwnershipTypeSchema),z.lazy(() => NestedEnumAccountOwnershipTypeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAccountOwnershipTypeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAccountOwnershipTypeNullableFilterSchema).optional()
}).strict();

export default EnumAccountOwnershipTypeNullableWithAggregatesFilterSchema;
