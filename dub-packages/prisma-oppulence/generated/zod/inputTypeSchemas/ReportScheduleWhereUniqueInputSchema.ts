import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportScheduleWhereInputSchema } from './ReportScheduleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ReportRelationFilterSchema } from './ReportRelationFilterSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportScheduleWhereUniqueInputSchema: z.ZodType<Prisma.ReportScheduleWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ReportScheduleWhereInputSchema),z.lazy(() => ReportScheduleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReportScheduleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReportScheduleWhereInputSchema),z.lazy(() => ReportScheduleWhereInputSchema).array() ]).optional(),
  reportId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  frequency: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  dayOfMonth: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  hour: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  minute: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  lastRun: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  nextRun: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  report: z.union([ z.lazy(() => ReportRelationFilterSchema),z.lazy(() => ReportWhereInputSchema) ]).optional(),
}).strict());

export default ReportScheduleWhereUniqueInputSchema;
