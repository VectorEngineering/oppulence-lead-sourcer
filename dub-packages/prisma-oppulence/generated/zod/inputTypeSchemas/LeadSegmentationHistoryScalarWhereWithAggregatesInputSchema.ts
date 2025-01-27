import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadSegmentationHistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  segmentationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  previousSegments: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  newSegments: z.lazy(() => JsonWithAggregatesFilterSchema).optional(),
  reason: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default LeadSegmentationHistoryScalarWhereWithAggregatesInputSchema;
