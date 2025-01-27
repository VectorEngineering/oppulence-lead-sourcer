import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterCreateManyReportInputSchema } from './ReportFilterCreateManyReportInputSchema';

export const ReportFilterCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportFilterCreateManyReportInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportFilterCreateManyReportInputSchema),z.lazy(() => ReportFilterCreateManyReportInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportFilterCreateManyReportInputEnvelopeSchema;
