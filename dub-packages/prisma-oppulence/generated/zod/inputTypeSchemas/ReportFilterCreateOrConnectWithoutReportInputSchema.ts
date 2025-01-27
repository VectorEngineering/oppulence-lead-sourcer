import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterWhereUniqueInputSchema } from './ReportFilterWhereUniqueInputSchema';
import { ReportFilterCreateWithoutReportInputSchema } from './ReportFilterCreateWithoutReportInputSchema';
import { ReportFilterUncheckedCreateWithoutReportInputSchema } from './ReportFilterUncheckedCreateWithoutReportInputSchema';

export const ReportFilterCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportFilterCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => ReportFilterWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportFilterCreateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportFilterCreateOrConnectWithoutReportInputSchema;
