import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardWhereInputSchema } from './DashboardWhereInputSchema';

export const DashboardNullableRelationFilterSchema: z.ZodType<Prisma.DashboardNullableRelationFilter> = z.object({
  is: z.lazy(() => DashboardWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DashboardWhereInputSchema).optional().nullable()
}).strict();

export default DashboardNullableRelationFilterSchema;
