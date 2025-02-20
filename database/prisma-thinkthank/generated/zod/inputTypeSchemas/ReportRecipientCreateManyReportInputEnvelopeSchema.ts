import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientCreateManyReportInputSchema } from './ReportRecipientCreateManyReportInputSchema';

export const ReportRecipientCreateManyReportInputEnvelopeSchema: z.ZodType<Prisma.ReportRecipientCreateManyReportInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReportRecipientCreateManyReportInputSchema),z.lazy(() => ReportRecipientCreateManyReportInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReportRecipientCreateManyReportInputEnvelopeSchema;
