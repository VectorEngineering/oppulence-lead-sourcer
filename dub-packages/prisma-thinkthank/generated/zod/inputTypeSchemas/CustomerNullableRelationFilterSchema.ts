import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerNullableRelationFilterSchema: z.ZodType<Prisma.CustomerNullableRelationFilter> = z.object({
  is: z.lazy(() => CustomerWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CustomerWhereInputSchema).optional().nullable()
}).strict();

export default CustomerNullableRelationFilterSchema;
