import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumDealCompetitorStatusNullableFilterSchema } from './EnumDealCompetitorStatusNullableFilterSchema';
import { DealCompetitorStatusSchema } from './DealCompetitorStatusSchema';
import { EnumDealCompetitorThreatLevelNullableFilterSchema } from './EnumDealCompetitorThreatLevelNullableFilterSchema';
import { DealCompetitorThreatLevelSchema } from './DealCompetitorThreatLevelSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DealRelationFilterSchema } from './DealRelationFilterSchema';
import { DealWhereInputSchema } from './DealWhereInputSchema';

export const DealCompetitorWhereInputSchema: z.ZodType<Prisma.DealCompetitorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DealCompetitorWhereInputSchema),z.lazy(() => DealCompetitorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DealCompetitorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DealCompetitorWhereInputSchema),z.lazy(() => DealCompetitorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dealId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  strengths: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  weaknesses: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  strategy: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumDealCompetitorStatusNullableFilterSchema),z.lazy(() => DealCompetitorStatusSchema) ]).optional().nullable(),
  threatLevel: z.union([ z.lazy(() => EnumDealCompetitorThreatLevelNullableFilterSchema),z.lazy(() => DealCompetitorThreatLevelSchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deal: z.union([ z.lazy(() => DealRelationFilterSchema),z.lazy(() => DealWhereInputSchema) ]).optional(),
}).strict();

export default DealCompetitorWhereInputSchema;
