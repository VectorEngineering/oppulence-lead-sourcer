import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TransactionPrioritySchema } from './TransactionPrioritySchema';
import { NestedEnumTransactionPriorityWithAggregatesFilterSchema } from './NestedEnumTransactionPriorityWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTransactionPriorityFilterSchema } from './NestedEnumTransactionPriorityFilterSchema';

export const EnumTransactionPriorityWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTransactionPriorityWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TransactionPrioritySchema).optional(),
  in: z.lazy(() => TransactionPrioritySchema).array().optional(),
  notIn: z.lazy(() => TransactionPrioritySchema).array().optional(),
  not: z.union([ z.lazy(() => TransactionPrioritySchema),z.lazy(() => NestedEnumTransactionPriorityWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTransactionPriorityFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTransactionPriorityFilterSchema).optional()
}).strict();

export default EnumTransactionPriorityWithAggregatesFilterSchema;
