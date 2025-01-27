import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KpiTypeSchema } from './KpiTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumKpiTypeFilterSchema } from './NestedEnumKpiTypeFilterSchema';

export const NestedEnumKpiTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumKpiTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => KpiTypeSchema).optional(),
  in: z.lazy(() => KpiTypeSchema).array().optional(),
  notIn: z.lazy(() => KpiTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => KpiTypeSchema),z.lazy(() => NestedEnumKpiTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumKpiTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumKpiTypeFilterSchema).optional()
}).strict();

export default NestedEnumKpiTypeWithAggregatesFilterSchema;
