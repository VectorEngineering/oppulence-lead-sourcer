import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionMethodSchema } from './TransactionMethodSchema';
import { NestedEnumTransactionMethodFilterSchema } from './NestedEnumTransactionMethodFilterSchema';

export const EnumTransactionMethodFilterSchema: z.ZodType<Prisma.EnumTransactionMethodFilter> = z.object({
  equals: z.lazy(() => TransactionMethodSchema).optional(),
  in: z.lazy(() => TransactionMethodSchema).array().optional(),
  notIn: z.lazy(() => TransactionMethodSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionMethodSchema),z.lazy(() => NestedEnumTransactionMethodFilterSchema) ]).optional(),
}).strict();

export default EnumTransactionMethodFilterSchema;
