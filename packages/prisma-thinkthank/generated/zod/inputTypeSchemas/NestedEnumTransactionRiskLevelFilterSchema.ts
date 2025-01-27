import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema';

export const NestedEnumTransactionRiskLevelFilterSchema: z.ZodType<Prisma.NestedEnumTransactionRiskLevelFilter> = z.object({
  equals: z.lazy(() => TransactionRiskLevelSchema).optional(),
  in: z.lazy(() => TransactionRiskLevelSchema).array().optional(),
  notIn: z.lazy(() => TransactionRiskLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionRiskLevelSchema),z.lazy(() => NestedEnumTransactionRiskLevelFilterSchema) ]).optional(),
}).strict();

export default NestedEnumTransactionRiskLevelFilterSchema;
