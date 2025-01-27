import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportColumnWhereUniqueInputSchema } from './ReportColumnWhereUniqueInputSchema';
import { ReportColumnUpdateWithoutReportInputSchema } from './ReportColumnUpdateWithoutReportInputSchema';
import { ReportColumnUncheckedUpdateWithoutReportInputSchema } from './ReportColumnUncheckedUpdateWithoutReportInputSchema';
import { ReportColumnCreateWithoutReportInputSchema } from './ReportColumnCreateWithoutReportInputSchema';
import { ReportColumnUncheckedCreateWithoutReportInputSchema } from './ReportColumnUncheckedCreateWithoutReportInputSchema';

export const ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnUpsertWithWhereUniqueWithoutReportInput> = z.object({
  where: z.lazy(() => ReportColumnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReportColumnUpdateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ReportColumnCreateWithoutReportInputSchema),z.lazy(() => ReportColumnUncheckedCreateWithoutReportInputSchema) ]),
}).strict();

export default ReportColumnUpsertWithWhereUniqueWithoutReportInputSchema;
