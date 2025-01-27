import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportSortingWhereInputSchema } from './ReportSortingWhereInputSchema';

export const ReportSortingListRelationFilterSchema: z.ZodType<Prisma.ReportSortingListRelationFilter> = z.object({
  every: z.lazy(() => ReportSortingWhereInputSchema).optional(),
  some: z.lazy(() => ReportSortingWhereInputSchema).optional(),
  none: z.lazy(() => ReportSortingWhereInputSchema).optional()
}).strict();

export default ReportSortingListRelationFilterSchema;
