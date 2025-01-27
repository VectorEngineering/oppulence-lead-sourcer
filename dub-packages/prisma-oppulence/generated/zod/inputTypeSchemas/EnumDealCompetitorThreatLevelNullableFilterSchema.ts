import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema';
import { NestedEnumDealCompetitorThreatLevelNullableFilterSchema } from './NestedEnumDealCompetitorThreatLevelNullableFilterSchema';

export const EnumDealCompetitorThreatLevelNullableFilterSchema: z.ZodType<Prisma.EnumDealCompetitorThreatLevelNullableFilter> = z.object({
  equals: z.lazy(() => DealCompetitorThreatLevelSchema).optional().nullable(),
  in: z.lazy(() => DealCompetitorThreatLevelSchema).array().optional().nullable(),
  notIn: z.lazy(() => DealCompetitorThreatLevelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DealCompetitorThreatLevelSchema),z.lazy(() => NestedEnumDealCompetitorThreatLevelNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumDealCompetitorThreatLevelNullableFilterSchema;
