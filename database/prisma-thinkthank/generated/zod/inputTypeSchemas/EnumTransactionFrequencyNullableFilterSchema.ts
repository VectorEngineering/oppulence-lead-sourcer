import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionFrequencySchema } from './TransactionFrequencySchema';
import { NestedEnumTransactionFrequencyNullableFilterSchema } from './NestedEnumTransactionFrequencyNullableFilterSchema';

export const EnumTransactionFrequencyNullableFilterSchema: z.ZodType<Prisma.EnumTransactionFrequencyNullableFilter> = z.object({
  equals: z.lazy(() => TransactionFrequencySchema).optional().nullable(),
  in: z.lazy(() => TransactionFrequencySchema).array().optional().nullable(),
  notIn: z.lazy(() => TransactionFrequencySchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => TransactionFrequencySchema),z.lazy(() => NestedEnumTransactionFrequencyNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumTransactionFrequencyNullableFilterSchema;
