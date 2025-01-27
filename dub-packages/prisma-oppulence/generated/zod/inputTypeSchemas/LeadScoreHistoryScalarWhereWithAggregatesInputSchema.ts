import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { FloatWithAggregatesFilterSchema } from './FloatWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadScoreHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadScoreHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadScoreHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadScoreHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadScoreHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadScoreHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadScoreHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadScoreId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  previousScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  newScore: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  changeReason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timestamp: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadScoreHistoryScalarWhereWithAggregatesInputSchema;
