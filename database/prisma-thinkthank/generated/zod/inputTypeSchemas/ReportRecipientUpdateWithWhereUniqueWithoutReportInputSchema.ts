import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientWhereUniqueInputSchema } from './ReportRecipientWhereUniqueInputSchema';
import { ReportRecipientUpdateWithoutReportInputSchema } from './ReportRecipientUpdateWithoutReportInputSchema';
import { ReportRecipientUncheckedUpdateWithoutReportInputSchema } from './ReportRecipientUncheckedUpdateWithoutReportInputSchema';

export const ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportRecipientWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReportRecipientUpdateWithoutReportInputSchema),z.lazy(() => ReportRecipientUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ReportRecipientUpdateWithWhereUniqueWithoutReportInputSchema;
