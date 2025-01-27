import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingWhereUniqueInputSchema } from './ReportSortingWhereUniqueInputSchema';
import { ReportSortingCreateWithoutReportInputSchema } from './ReportSortingCreateWithoutReportInputSchema';
import { ReportSortingUncheckedCreateWithoutReportInputSchema } from './ReportSortingUncheckedCreateWithoutReportInputSchema';

export const ReportSortingCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => ReportSortingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportSortingCreateWithoutReportInputSchema),z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportSortingCreateOrConnectWithoutReportInputSchema;
