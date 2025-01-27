import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingWhereUniqueInputSchema } from './ReportSortingWhereUniqueInputSchema';
import { ReportSortingUpdateWithoutReportInputSchema } from './ReportSortingUpdateWithoutReportInputSchema';
import { ReportSortingUncheckedUpdateWithoutReportInputSchema } from './ReportSortingUncheckedUpdateWithoutReportInputSchema';

export const ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportSortingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReportSortingUpdateWithoutReportInputSchema),z.lazy(() => ReportSortingUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema;
