import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterWhereUniqueInputSchema } from './ReportFilterWhereUniqueInputSchema';
import { ReportFilterUpdateWithoutReportInputSchema } from './ReportFilterUpdateWithoutReportInputSchema';
import { ReportFilterUncheckedUpdateWithoutReportInputSchema } from './ReportFilterUncheckedUpdateWithoutReportInputSchema';
import { ReportFilterCreateWithoutReportInputSchema } from './ReportFilterCreateWithoutReportInputSchema';
import { ReportFilterUncheckedCreateWithoutReportInputSchema } from './ReportFilterUncheckedCreateWithoutReportInputSchema';

export const ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportFilterUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportFilterWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReportFilterUpdateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ReportFilterCreateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportFilterUpsertWithWhereUniqueWithoutReportInputSchema;
