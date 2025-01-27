import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const ReportScheduleScalarWhereInputSchema: z.ZodType<Prisma.ReportScheduleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReportScheduleScalarWhereInputSchema),z.lazy(() => ReportScheduleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportScheduleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportScheduleScalarWhereInputSchema),z.lazy(() => ReportScheduleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  frequency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  dayOfMonth: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  hour: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  minute: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  lastRun: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextRun: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default ReportScheduleScalarWhereInputSchema;
