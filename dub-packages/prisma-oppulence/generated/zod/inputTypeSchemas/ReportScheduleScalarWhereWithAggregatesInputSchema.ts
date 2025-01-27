import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const ReportScheduleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReportScheduleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReportScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ReportScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportScheduleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportScheduleScalarWhereWithAggregatesInputSchema),z.lazy(() => ReportScheduleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  reportId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  frequency: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  dayOfMonth: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  hour: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  minute: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  lastRun: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextRun: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default ReportScheduleScalarWhereWithAggregatesInputSchema;
