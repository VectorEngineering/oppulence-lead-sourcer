import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerStatusSchema } from './PartnerStatusSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPartnerStatusFilterSchema } from './NestedEnumPartnerStatusFilterSchema';

export const NestedEnumPartnerStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPartnerStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PartnerStatusSchema).optional(),
  in: z.lazy(() => PartnerStatusSchema).array().optional(),
  notIn: z.lazy(() => PartnerStatusSchema).array().optional(),
  not: z.union([ z.lazy(() => PartnerStatusSchema),z.lazy(() => NestedEnumPartnerStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPartnerStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPartnerStatusFilterSchema).optional()
}).strict();

export default NestedEnumPartnerStatusWithAggregatesFilterSchema;
