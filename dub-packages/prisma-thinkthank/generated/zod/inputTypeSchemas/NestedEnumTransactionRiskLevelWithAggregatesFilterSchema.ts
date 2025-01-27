import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionRiskLevelSchema } from './TransactionRiskLevelSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTransactionRiskLevelFilterSchema } from './NestedEnumTransactionRiskLevelFilterSchema';

export const NestedEnumTransactionRiskLevelWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTransactionRiskLevelWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TransactionRiskLevelSchema).optional(),
  in: z.lazy(() => TransactionRiskLevelSchema).array().optional(),
  notIn: z.lazy(() => TransactionRiskLevelSchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionRiskLevelSchema),z.lazy(() => NestedEnumTransactionRiskLevelWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionRiskLevelFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionRiskLevelFilterSchema).optional()
}).strict();

export default NestedEnumTransactionRiskLevelWithAggregatesFilterSchema;
