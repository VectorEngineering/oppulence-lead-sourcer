import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityWhereInputSchema } from './DealActivityWhereInputSchema';

export const DealActivityListRelationFilterSchema: z.ZodType<Prisma.DealActivityListRelationFilter> = z.object({
  every: z.lazy(() => DealActivityWhereInputSchema).optional(),
  some: z.lazy(() => DealActivityWhereInputSchema).optional(),
  none: z.lazy(() => DealActivityWhereInputSchema).optional()
}).strict();

export default DealActivityListRelationFilterSchema;
