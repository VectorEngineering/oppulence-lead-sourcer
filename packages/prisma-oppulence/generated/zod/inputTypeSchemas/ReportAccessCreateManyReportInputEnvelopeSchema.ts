import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessCreateManyReportInputSchema } from './ReportAccessCreateManyReportInputSchema';

export const ReportAccessCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportAccessCreateManyReportInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportAccessCreateManyReportInputSchema),z.lazy(() => ReportAccessCreateManyReportInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportAccessCreateManyReportInputEnvelopeSchema;
