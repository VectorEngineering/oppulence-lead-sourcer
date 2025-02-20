import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportScheduleCreateManyReportInputSchema } from './ReportScheduleCreateManyReportInputSchema';

export const ReportScheduleCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportScheduleCreateManyReportInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportScheduleCreateManyReportInputSchema),z.lazy(() => ReportScheduleCreateManyReportInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportScheduleCreateManyReportInputEnvelopeSchema;
