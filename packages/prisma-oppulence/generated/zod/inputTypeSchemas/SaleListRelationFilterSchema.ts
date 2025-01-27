import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleWhereInputSchema } from './SaleWhereInputSchema';

export const SaleListRelationFilterSchema: z.ZodType<Prisma.SaleListRelationFilter> = z.object({
  every: z.lazy(() => SaleWhereInputSchema).optional(),
  some: z.lazy(() => SaleWhereInputSchema).optional(),
  none: z.lazy(() => SaleWhereInputSchema).optional()
}).strict();

export default SaleListRelationFilterSchema;
