import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportScheduleWhereUniqueInputSchema } from './ReportScheduleWhereUniqueInputSchema';
import { ReportScheduleUpdateWithoutReportInputSchema } from './ReportScheduleUpdateWithoutReportInputSchema';
import { ReportScheduleUncheckedUpdateWithoutReportInputSchema } from './ReportScheduleUncheckedUpdateWithoutReportInputSchema';

export const ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportScheduleUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportScheduleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReportScheduleUpdateWithoutReportInputSchema),z.lazy(() => ReportScheduleUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema;
