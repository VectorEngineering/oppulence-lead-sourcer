import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema';
import { NestedEnumDealCompetitorStatusNullableWithAggregatesFilterSchema } from './NestedEnumDealCompetitorStatusNullableWithAggregatesFilterSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumDealCompetitorStatusNullableFilterSchema } from './NestedEnumDealCompetitorStatusNullableFilterSchema';

export const EnumDealCompetitorStatusNullableWithAggregatesFilterSchema: z.ZodType<Prisma.EnumDealCompetitorStatusNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => DealCompetitorStatusSchema).optional().nullable(),
  in: z.lazy(() => DealCompetitorStatusSchema).array().optional().nullable(),
  notIn: z.lazy(() => DealCompetitorStatusSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DealCompetitorStatusSchema),z.lazy(() => NestedEnumDealCompetitorStatusNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumDealCompetitorStatusNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumDealCompetitorStatusNullableFilterSchema).optional()
}).strict();

export default EnumDealCompetitorStatusNullableWithAggregatesFilterSchema;
