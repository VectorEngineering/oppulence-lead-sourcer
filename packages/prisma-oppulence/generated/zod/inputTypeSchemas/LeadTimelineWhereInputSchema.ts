import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadTimelineWhereInputSchema: z.ZodType<Prisma.LeadTimelineWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LeadTimelineWhereInputSchema),z.lazy(() => LeadTimelineWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadTimelineWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadTimelineWhereInputSchema),z.lazy(() => LeadTimelineWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  leadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  milestone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  targetDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  actualDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict();

export default LeadTimelineWhereInputSchema;
