import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RiskLevelSchema } from './RiskLevelSchema';
import { NestedEnumRiskLevelNullableFilterSchema } from './NestedEnumRiskLevelNullableFilterSchema';

export const EnumRiskLevelNullableFilterSchema: z.ZodType<Prisma.EnumRiskLevelNullableFilter> = z.object({
  equals: z.lazy(() => RiskLevelSchema).optional().nullable(),
  in: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  notIn: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RiskLevelSchema),z.lazy(() => NestedEnumRiskLevelNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumRiskLevelNullableFilterSchema;
