import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportUpdateWithoutFiltersInputSchema } from './ReportUpdateWithoutFiltersInputSchema';
import { ReportUncheckedUpdateWithoutFiltersInputSchema } from './ReportUncheckedUpdateWithoutFiltersInputSchema';
import { ReportCreateWithoutFiltersInputSchema } from './ReportCreateWithoutFiltersInputSchema';
import { ReportUncheckedCreateWithoutFiltersInputSchema } from './ReportUncheckedCreateWithoutFiltersInputSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportUpsertWithoutFiltersInputSchema: z.ZodType<Prisma.ReportUpsertWithoutFiltersInput> = z.object({
  update: z.union([ z.lazy(() => ReportUpdateWithoutFiltersInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutFiltersInputSchema) ]),
  create: z.union([ z.lazy(() => ReportCreateWithoutFiltersInputSchema),z.lazy(() => ReportUncheckedCreateWithoutFiltersInputSchema) ]),
  where: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export default ReportUpsertWithoutFiltersInputSchema;
