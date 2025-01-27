import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportScheduleScalarWhereInputSchema } from './ReportScheduleScalarWhereInputSchema';
import { ReportScheduleUpdateManyMutationInputSchema } from './ReportScheduleUpdateManyMutationInputSchema';
import { ReportScheduleUncheckedUpdateManyWithoutReportInputSchema } from './ReportScheduleUncheckedUpdateManyWithoutReportInputSchema';

export const ReportScheduleUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportScheduleUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => ReportScheduleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReportScheduleUpdateManyMutationInputSchema),z.lazy(() => ReportScheduleUncheckedUpdateManyWithoutReportInputSchema) ]),
}).strict();

export default ReportScheduleUpdateManyWithWhereWithoutReportInputSchema;
