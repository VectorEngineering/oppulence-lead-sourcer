import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportUpdateWithoutColumnsInputSchema } from './ReportUpdateWithoutColumnsInputSchema';
import { ReportUncheckedUpdateWithoutColumnsInputSchema } from './ReportUncheckedUpdateWithoutColumnsInputSchema';
import { ReportCreateWithoutColumnsInputSchema } from './ReportCreateWithoutColumnsInputSchema';
import { ReportUncheckedCreateWithoutColumnsInputSchema } from './ReportUncheckedCreateWithoutColumnsInputSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportUpsertWithoutColumnsInputSchema: z.ZodType<Prisma.ReportUpsertWithoutColumnsInput> = z.object({
  update: z.union([ z.lazy(() => ReportUpdateWithoutColumnsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutColumnsInputSchema) ]),
  create: z.union([ z.lazy(() => ReportCreateWithoutColumnsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutColumnsInputSchema) ]),
  where: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export default ReportUpsertWithoutColumnsInputSchema;
