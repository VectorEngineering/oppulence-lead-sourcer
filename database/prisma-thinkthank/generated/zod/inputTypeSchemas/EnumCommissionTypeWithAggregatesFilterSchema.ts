import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommissionTypeSchema } from './CommissionTypeSchema';
import { NestedEnumCommissionTypeWithAggregatesFilterSchema } from './NestedEnumCommissionTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCommissionTypeFilterSchema } from './NestedEnumCommissionTypeFilterSchema';

export const EnumCommissionTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumCommissionTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => CommissionTypeSchema).optional(),
  in: z.lazy(() => CommissionTypeSchema).array().optional(),
  notIn: z.lazy(() => CommissionTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => CommissionTypeSchema),z.lazy(() => NestedEnumCommissionTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCommissionTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCommissionTypeFilterSchema).optional()
}).strict();

export default EnumCommissionTypeWithAggregatesFilterSchema;
