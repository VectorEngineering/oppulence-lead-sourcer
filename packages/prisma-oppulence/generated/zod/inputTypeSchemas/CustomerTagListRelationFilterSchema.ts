import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerTagWhereInputSchema } from './CustomerTagWhereInputSchema';

export const CustomerTagListRelationFilterSchema: z.ZodType<Prisma.CustomerTagListRelationFilter> = z.object({
  every: z.lazy(() => CustomerTagWhereInputSchema).optional(),
  some: z.lazy(() => CustomerTagWhereInputSchema).optional(),
  none: z.lazy(() => CustomerTagWhereInputSchema).optional()
}).strict();

export default CustomerTagListRelationFilterSchema;
