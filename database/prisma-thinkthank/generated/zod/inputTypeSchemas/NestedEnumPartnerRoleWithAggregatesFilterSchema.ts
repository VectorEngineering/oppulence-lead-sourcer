import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PartnerRoleSchema } from './PartnerRoleSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPartnerRoleFilterSchema } from './NestedEnumPartnerRoleFilterSchema';

export const NestedEnumPartnerRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPartnerRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PartnerRoleSchema).optional(),
  in: z.lazy(() => PartnerRoleSchema).array().optional(),
  notIn: z.lazy(() => PartnerRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => PartnerRoleSchema),z.lazy(() => NestedEnumPartnerRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPartnerRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPartnerRoleFilterSchema).optional()
}).strict();

export default NestedEnumPartnerRoleWithAggregatesFilterSchema;
