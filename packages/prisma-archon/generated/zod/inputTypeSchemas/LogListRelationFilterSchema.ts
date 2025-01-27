import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LogWhereInputSchema } from './LogWhereInputSchema';

export const LogListRelationFilterSchema: z.ZodType<Prisma.LogListRelationFilter> = z.object({
  every: z.lazy(() => LogWhereInputSchema).optional(),
  some: z.lazy(() => LogWhereInputSchema).optional(),
  none: z.lazy(() => LogWhereInputSchema).optional()
}).strict();

export default LogListRelationFilterSchema;
