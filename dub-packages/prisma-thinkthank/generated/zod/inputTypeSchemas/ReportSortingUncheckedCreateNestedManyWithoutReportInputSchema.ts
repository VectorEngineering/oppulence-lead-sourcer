import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingCreateWithoutReportInputSchema } from './ReportSortingCreateWithoutReportInputSchema';
import { ReportSortingUncheckedCreateWithoutReportInputSchema } from './ReportSortingUncheckedCreateWithoutReportInputSchema';
import { ReportSortingCreateOrConnectWithoutReportInputSchema } from './ReportSortingCreateOrConnectWithoutReportInputSchema';
import { ReportSortingCreateManyReportInputEnvelopeSchema } from './ReportSortingCreateManyReportInputEnvelopeSchema';
import { ReportSortingWhereUniqueInputSchema } from './ReportSortingWhereUniqueInputSchema';

export const ReportSortingUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => ReportSortingCreateWithoutReportInputSchema),z.lazy(() => ReportSortingCreateWithoutReportInputSchema).array(),z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportSortingCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportSortingCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportSortingCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReportSortingWhereUniqueInputSchema),z.lazy(() => ReportSortingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReportSortingUncheckedCreateNestedManyWithoutReportInputSchema;
