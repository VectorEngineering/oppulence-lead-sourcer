import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountOwnershipTypeSchema } from './AccountOwnershipTypeSchema';
import { NestedEnumAccountOwnershipTypeNullableFilterSchema } from './NestedEnumAccountOwnershipTypeNullableFilterSchema';

export const EnumAccountOwnershipTypeNullableFilterSchema: z.ZodType<Prisma.EnumAccountOwnershipTypeNullableFilter> = z.object({
  equals: z.lazy(() => AccountOwnershipTypeSchema).optional().nullable(),
  in: z.lazy(() => AccountOwnershipTypeSchema).array().optional().nullable(),
  notIn: z.lazy(() => AccountOwnershipTypeSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => AccountOwnershipTypeSchema),z.lazy(() => NestedEnumAccountOwnershipTypeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumAccountOwnershipTypeNullableFilterSchema;
