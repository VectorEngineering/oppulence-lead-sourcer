import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankProviderSchema } from './BankProviderSchema';
import { NestedEnumBankProviderNullableWithAggregatesFilterSchema } from './NestedEnumBankProviderNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumBankProviderNullableFilterSchema } from './NestedEnumBankProviderNullableFilterSchema';

export const EnumBankProviderNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBankProviderNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => BankProviderSchema).optional().nullable(),
  in: z.lazy(() => BankProviderSchema).array().optional().nullable(),
  notIn: z.lazy(() => BankProviderSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => BankProviderSchema),z.lazy(() => NestedEnumBankProviderNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBankProviderNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBankProviderNullableFilterSchema).optional()
}).strict();

export default EnumBankProviderNullableWithAggregatesFilterSchema;
