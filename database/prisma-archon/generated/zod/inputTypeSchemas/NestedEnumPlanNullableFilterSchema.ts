import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PlanSchema } from './PlanSchema';

export const NestedEnumPlanNullableFilterSchema: z.ZodType<Prisma.NestedEnumPlanNullableFilter> = z.object({
  equals: z.lazy(() => PlanSchema).optional().nullable(),
  in: z.lazy(() => PlanSchema).array().optional().nullable(),
  notIn: z.lazy(() => PlanSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => PlanSchema),z.lazy(() => NestedEnumPlanNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumPlanNullableFilterSchema;
