import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadCompetitiveHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  analysisId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  changes: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  reason: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadCompetitiveHistoryScalarWhereWithAggregatesInputSchema;
