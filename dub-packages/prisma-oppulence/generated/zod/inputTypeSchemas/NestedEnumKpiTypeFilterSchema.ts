import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { KpiTypeSchema } from './KpiTypeSchema';

export const NestedEnumKpiTypeFilterSchema: z.ZodType<Prisma.NestedEnumKpiTypeFilter> = z.object({
  equals: z.lazy(() => KpiTypeSchema).optional(),
  in: z.lazy(() => KpiTypeSchema).array().optional(),
  notIn: z.lazy(() => KpiTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => KpiTypeSchema),z.lazy(() => NestedEnumKpiTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumKpiTypeFilterSchema;
