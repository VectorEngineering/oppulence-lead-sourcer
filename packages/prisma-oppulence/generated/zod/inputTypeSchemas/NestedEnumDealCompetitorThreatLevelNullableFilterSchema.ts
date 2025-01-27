import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema';

export const NestedEnumDealCompetitorThreatLevelNullableFilterSchema: z.ZodType<Prisma.NestedEnumDealCompetitorThreatLevelNullableFilter> = z.object({
  equals: z.lazy(() => DealCompetitorThreatLevelSchema).optional().nullable(),
  in: z.lazy(() => DealCompetitorThreatLevelSchema).array().optional().nullable(),
  notIn: z.lazy(() => DealCompetitorThreatLevelSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => DealCompetitorThreatLevelSchema),z.lazy(() => NestedEnumDealCompetitorThreatLevelNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default NestedEnumDealCompetitorThreatLevelNullableFilterSchema;
