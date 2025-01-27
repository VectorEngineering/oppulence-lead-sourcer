import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const LeadTouchpointScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LeadTouchpointScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTouchpointScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadTouchpointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTouchpointScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTouchpointScalarWhereWithAggregatesInputSchema),z.lazy(() => LeadTouchpointScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  channel: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  campaign: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  content: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  interaction: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  timestamp: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isFirstTouch: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  isLastTouch: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default LeadTouchpointScalarWhereWithAggregatesInputSchema;
