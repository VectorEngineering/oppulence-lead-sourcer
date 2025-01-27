import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportScheduleWhereUniqueInputSchema } from './ReportScheduleWhereUniqueInputSchema';
import { ReportScheduleUpdateWithoutReportInputSchema } from './ReportScheduleUpdateWithoutReportInputSchema';
import { ReportScheduleUncheckedUpdateWithoutReportInputSchema } from './ReportScheduleUncheckedUpdateWithoutReportInputSchema';
import { ReportScheduleCreateWithoutReportInputSchema } from './ReportScheduleCreateWithoutReportInputSchema';
import { ReportScheduleUncheckedCreateWithoutReportInputSchema } from './ReportScheduleUncheckedCreateWithoutReportInputSchema';

export const ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportScheduleUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportScheduleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReportScheduleUpdateWithoutReportInputSchema),z.lazy(() => ReportScheduleUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ReportScheduleCreateWithoutReportInputSchema),z.lazy(() => ReportScheduleUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema;
