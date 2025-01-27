import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterCreateWithoutReportInputSchema } from './ReportFilterCreateWithoutReportInputSchema';
import { ReportFilterUncheckedCreateWithoutReportInputSchema } from './ReportFilterUncheckedCreateWithoutReportInputSchema';
import { ReportFilterCreateOrConnectWithoutReportInputSchema } from './ReportFilterCreateOrConnectWithoutReportInputSchema';
import { ReportFilterCreateManyReportInputEnvelopeSchema } from './ReportFilterCreateManyReportInputEnvelopeSchema';
import { ReportFilterWhereUniqueInputSchema } from './ReportFilterWhereUniqueInputSchema';

export const ReportFilterUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportFilterUncheckedCreateNestedManyWithoutReportInput> = z.object({
  create: z.union([ z.lazy(() => ReportFilterCreateWithoutReportInputSchema),z.lazy(() => ReportFilterCreateWithoutReportInputSchema).array(),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReportFilterCreateOrConnectWithoutReportInputSchema),z.lazy(() => ReportFilterCreateOrConnectWithoutReportInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReportFilterCreateManyReportInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReportFilterWhereUniqueInputSchema),z.lazy(() => ReportFilterWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReportFilterUncheckedCreateNestedManyWithoutReportInputSchema;
