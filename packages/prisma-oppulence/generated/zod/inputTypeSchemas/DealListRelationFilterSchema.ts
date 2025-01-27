import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealWhereInputSchema } from './DealWhereInputSchema';

export const DealListRelationFilterSchema: z.ZodType<Prisma.DealListRelationFilter> = z.object({
  every: z.lazy(() => DealWhereInputSchema).optional(),
  some: z.lazy(() => DealWhereInputSchema).optional(),
  none: z.lazy(() => DealWhereInputSchema).optional()
}).strict();

export default DealListRelationFilterSchema;
