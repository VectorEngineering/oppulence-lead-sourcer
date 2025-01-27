import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportUpdateWithoutSortingsInputSchema } from './ReportUpdateWithoutSortingsInputSchema';
import { ReportUncheckedUpdateWithoutSortingsInputSchema } from './ReportUncheckedUpdateWithoutSortingsInputSchema';
import { ReportCreateWithoutSortingsInputSchema } from './ReportCreateWithoutSortingsInputSchema';
import { ReportUncheckedCreateWithoutSortingsInputSchema } from './ReportUncheckedCreateWithoutSortingsInputSchema';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportUpsertWithoutSortingsInputSchema: z.ZodType<Prisma.ReportUpsertWithoutSortingsInput> = z.object({
  update: z.union([ z.lazy(() => ReportUpdateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutSortingsInputSchema) ]),
  create: z.union([ z.lazy(() => ReportCreateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedCreateWithoutSortingsInputSchema) ]),
  where: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export default ReportUpsertWithoutSortingsInputSchema;
