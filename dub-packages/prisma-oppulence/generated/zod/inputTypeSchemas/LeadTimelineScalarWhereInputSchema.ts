import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const LeadTimelineScalarWhereInputSchema: z.ZodType<Prisma.LeadTimelineScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTimelineScalarWhereInputSchema),z.lazy(() => LeadTimelineScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTimelineScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTimelineScalarWhereInputSchema),z.lazy(() => LeadTimelineScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  milestone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  targetDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  actualDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default LeadTimelineScalarWhereInputSchema;
