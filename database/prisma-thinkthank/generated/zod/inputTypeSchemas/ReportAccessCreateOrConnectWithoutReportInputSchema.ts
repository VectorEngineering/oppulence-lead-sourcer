import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema';
import { ReportAccessCreateWithoutReportInputSchema } from './ReportAccessCreateWithoutReportInputSchema';
import { ReportAccessUncheckedCreateWithoutReportInputSchema } from './ReportAccessUncheckedCreateWithoutReportInputSchema';

export const ReportAccessCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportAccessCreateWithoutReportInputSchema),z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportAccessCreateOrConnectWithoutReportInputSchema;
