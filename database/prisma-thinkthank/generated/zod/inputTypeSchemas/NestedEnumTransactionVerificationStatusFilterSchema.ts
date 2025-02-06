import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionVerificationStatusSchema } from './TransactionVerificationStatusSchema';

export const NestedEnumTransactionVerificationStatusFilterSchema: z.ZodType<Prisma.NestedEnumTransactionVerificationStatusFilter> = z.object({
  equals: z.lazy(() => TransactionVerificationStatusSchema).optional(),
  in: z.lazy(() => TransactionVerificationStatusSchema).array().optional(),
  notIn: z.lazy(() => TransactionVerificationStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionVerificationStatusSchema),z.lazy(() => NestedEnumTransactionVerificationStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumTransactionVerificationStatusFilterSchema;
