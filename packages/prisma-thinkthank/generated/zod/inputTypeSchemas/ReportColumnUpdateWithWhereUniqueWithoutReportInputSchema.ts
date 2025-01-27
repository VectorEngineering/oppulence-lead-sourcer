import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportColumnWhereUniqueInputSchema } from './ReportColumnWhereUniqueInputSchema';
import { ReportColumnUpdateWithoutReportInputSchema } from './ReportColumnUpdateWithoutReportInputSchema';
import { ReportColumnUncheckedUpdateWithoutReportInputSchema } from './ReportColumnUncheckedUpdateWithoutReportInputSchema';

export const ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnUpdateWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportColumnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReportColumnUpdateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ReportColumnUpdateWithWhereUniqueWithoutReportInputSchema;
