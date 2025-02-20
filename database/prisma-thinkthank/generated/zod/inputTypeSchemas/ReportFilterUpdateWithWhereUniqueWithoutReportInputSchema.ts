import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportFilterWhereUniqueInputSchema } from './ReportFilterWhereUniqueInputSchema';
import { ReportFilterUpdateWithoutReportInputSchema } from './ReportFilterUpdateWithoutReportInputSchema';
import { ReportFilterUncheckedUpdateWithoutReportInputSchema } from './ReportFilterUncheckedUpdateWithoutReportInputSchema';

export const ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportFilterUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportFilterWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReportFilterUpdateWithoutReportInputSchema),z.lazy(() => ReportFilterUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ReportFilterUpdateWithWhereUniqueWithoutReportInputSchema;
