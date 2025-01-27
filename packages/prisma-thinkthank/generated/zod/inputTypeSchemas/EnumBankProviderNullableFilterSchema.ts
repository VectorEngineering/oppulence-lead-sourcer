import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BankProviderSchema } from './BankProviderSchema';
import { NestedEnumBankProviderNullableFilterSchema } from './NestedEnumBankProviderNullableFilterSchema';

export const EnumBankProviderNullableFilterSchema: z.ZodType<Prisma.EnumBankProviderNullableFilter> = z.object({
  equals: z.lazy(() => BankProviderSchema).optional().nullable(),
  in: z.lazy(() => BankProviderSchema).array().optional().nullable(),
  notIn: z.lazy(() => BankProviderSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => BankProviderSchema),z.lazy(() => NestedEnumBankProviderNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumBankProviderNullableFilterSchema;
