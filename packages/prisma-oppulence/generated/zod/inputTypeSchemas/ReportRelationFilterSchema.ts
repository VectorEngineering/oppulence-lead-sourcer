import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportWhereInputSchema } from './ReportWhereInputSchema';

export const ReportRelationFilterSchema: z.ZodType<Prisma.ReportRelationFilter> = z.object({
  is: z.lazy(() => ReportWhereInputSchema).optional(),
  isNot: z.lazy(() => ReportWhereInputSchema).optional()
}).strict();

export default ReportRelationFilterSchema;
