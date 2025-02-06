import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';
import { ReportUpdateWithoutSortingsInputSchema } from './ReportUpdateWithoutSortingsInputSchema';
import { ReportUncheckedUpdateWithoutSortingsInputSchema } from './ReportUncheckedUpdateWithoutSortingsInputSchema';

export const ReportUpdateToOneWithWhereWithoutSortingsInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutSortingsInput> = z.object({
  where: z.lazy(() => ReportWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ReportUpdateWithoutSortingsInputSchema),z.lazy(() => ReportUncheckedUpdateWithoutSortingsInputSchema) ]),
}).strict();

export default ReportUpdateToOneWithWhereWithoutSortingsInputSchema;
