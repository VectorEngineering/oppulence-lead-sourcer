import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportUpdateWithoutSchedulesInputSchema } from './ReportUpdateWithoutSchedulesInputSchema';
import { ReportUncheckedUpdateWithoutSchedulesInputSchema } from './ReportUncheckedUpdateWithoutSchedulesInputSchema';
import { ReportCreateWithoutSchedulesInputSchema } from './ReportCreateWithoutSchedulesInputSchema';
import { ReportUncheckedCreateWithoutSchedulesInputSchema } from './ReportUncheckedCreateWithoutSchedulesInputSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportUpsertWithoutSchedulesInputSchema: z.ZodType<Prisma.ReportUpsertWithoutSchedulesInput> = z.object({
  update: z.union([ z.lazy(() => ReportUpdateWithoutSchedulesInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutSchedulesInputSchema) ]),
  create: z.union([ z.lazy(() => ReportCreateWithoutSchedulesInputSchema),z.lazy(() => ReportUncheckedCreateWithoutSchedulesInputSchema) ]),
  where: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export default ReportUpsertWithoutSchedulesInputSchema;
