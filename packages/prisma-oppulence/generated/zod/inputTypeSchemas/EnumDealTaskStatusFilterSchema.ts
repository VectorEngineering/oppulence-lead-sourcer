import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealTaskStatusSchema } from './DealTaskStatusSchema';
import { NestedEnumDealTaskStatusFilterSchema } from './NestedEnumDealTaskStatusFilterSchema';

export const EnumDealTaskStatusFilterSchema: z.ZodType<Prisma.EnumDealTaskStatusFilter> = z.object({
  equals: z.lazy(() => DealTaskStatusSchema).optional(),
  in: z.lazy(() => DealTaskStatusSchema).array().optional(),
  notIn: z.lazy(() => DealTaskStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => DealTaskStatusSchema),z.lazy(() => NestedEnumDealTaskStatusFilterSchema) ]).optional(),
}).strict();

export default EnumDealTaskStatusFilterSchema;
