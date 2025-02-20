import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientWhereUniqueInputSchema } from './ReportRecipientWhereUniqueInputSchema';
import { ReportRecipientUpdateWithoutReportInputSchema } from './ReportRecipientUpdateWithoutReportInputSchema';
import { ReportRecipientUncheckedUpdateWithoutReportInputSchema } from './ReportRecipientUncheckedUpdateWithoutReportInputSchema';
import { ReportRecipientCreateWithoutReportInputSchema } from './ReportRecipientCreateWithoutReportInputSchema';
import { ReportRecipientUncheckedCreateWithoutReportInputSchema } from './ReportRecipientUncheckedCreateWithoutReportInputSchema';

export const ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportRecipientWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReportRecipientUpdateWithoutReportInputSchema),z.lazy(() => ReportRecipientUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ReportRecipientCreateWithoutReportInputSchema),z.lazy(() => ReportRecipientUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportRecipientUpsertWithWhereUniqueWithoutReportInputSchema;
