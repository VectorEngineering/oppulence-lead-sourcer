import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportColumnWhereUniqueInputSchema } from './ReportColumnWhereUniqueInputSchema';
import { ReportColumnCreateWithoutReportInputSchema } from './ReportColumnCreateWithoutReportInputSchema';
import { ReportColumnUncheckedCreateWithoutReportInputSchema } from './ReportColumnUncheckedCreateWithoutReportInputSchema';

export const ReportColumnCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnCreateOrConnectWithoutReportInput> = z.object({
  where: z.lazy(() => ReportColumnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReportColumnCreateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportColumnCreateOrConnectWithoutReportInputSchema;
