import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RiskLevelSchema } from './RiskLevelSchema';
import { NestedEnumRiskLevelNullableWithAggregatesFilterSchema } from './NestedEnumRiskLevelNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumRiskLevelNullableFilterSchema } from './NestedEnumRiskLevelNullableFilterSchema';

export const EnumRiskLevelNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumRiskLevelNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => RiskLevelSchema).optional().nullable(),
  in: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  notIn: z.lazy(() => RiskLevelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => RiskLevelSchema),z.lazy(() => NestedEnumRiskLevelNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumRiskLevelNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumRiskLevelNullableFilterSchema).optional()
}).strict();

export default EnumRiskLevelNullableWithAggregatesFilterSchema;
