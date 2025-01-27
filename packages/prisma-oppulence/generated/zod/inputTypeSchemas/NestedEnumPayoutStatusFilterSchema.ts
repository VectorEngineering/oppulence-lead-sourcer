import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutStatusSchema } from './PayoutStatusSchema';

export const NestedEnumPayoutStatusFilterSchema: z.ZodType<Prisma.NestedEnumPayoutStatusFilter> = z.object({
  equals: z.lazy(() => PayoutStatusSchema).optional(),
  in: z.lazy(() => PayoutStatusSchema).array().optional(),
  notIn: z.lazy(() => PayoutStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PayoutStatusSchema),z.lazy(() => NestedEnumPayoutStatusFilterSchema) ]).optional(),
}).strict();

export default NestedEnumPayoutStatusFilterSchema;
