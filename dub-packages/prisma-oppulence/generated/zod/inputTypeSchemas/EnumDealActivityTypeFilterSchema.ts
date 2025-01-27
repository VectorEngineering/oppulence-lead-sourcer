import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealActivityTypeSchema } from './DealActivityTypeSchema';
import { NestedEnumDealActivityTypeFilterSchema } from './NestedEnumDealActivityTypeFilterSchema';

export const EnumDealActivityTypeFilterSchema: z.ZodType<Prisma.EnumDealActivityTypeFilter> = z.object({
  equals: z.lazy(() => DealActivityTypeSchema).optional(),
  in: z.lazy(() => DealActivityTypeSchema).array().optional(),
  notIn: z.lazy(() => DealActivityTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => DealActivityTypeSchema),z.lazy(() => NestedEnumDealActivityTypeFilterSchema) ]).optional(),
}).strict();

export default EnumDealActivityTypeFilterSchema;
