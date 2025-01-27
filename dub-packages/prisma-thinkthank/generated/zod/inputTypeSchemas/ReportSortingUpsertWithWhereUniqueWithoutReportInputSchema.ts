import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingWhereUniqueInputSchema } from './ReportSortingWhereUniqueInputSchema';
import { ReportSortingUpdateWithoutReportInputSchema } from './ReportSortingUpdateWithoutReportInputSchema';
import { ReportSortingUncheckedUpdateWithoutReportInputSchema } from './ReportSortingUncheckedUpdateWithoutReportInputSchema';
import { ReportSortingCreateWithoutReportInputSchema } from './ReportSortingCreateWithoutReportInputSchema';
import { ReportSortingUncheckedCreateWithoutReportInputSchema } from './ReportSortingUncheckedCreateWithoutReportInputSchema';

export const ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportSortingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReportSortingUpdateWithoutReportInputSchema),z.lazy(() => ReportSortingUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ReportSortingCreateWithoutReportInputSchema),z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema;
