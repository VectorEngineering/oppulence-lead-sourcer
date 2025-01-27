import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RiskLevelSchema } from './RiskLevelSchema';

export const NestedEnumRiskLevelNullableFilterSchema: z.ZodType<Prisma.NestedEnumRiskLevelNullableFilter> = z.object({
  equals: z.lazy(() => RiskLevelSchema).optional().nullable(),
  in: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  notIn: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RiskLevelSchema),z.lazy(() => NestedEnumRiskLevelNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumRiskLevelNullableFilterSchema;
