import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSourceSchema } from './LeadSourceSchema';
import { NestedEnumLeadSourceWithAggregatesFilterSchema } from './NestedEnumLeadSourceWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumLeadSourceFilterSchema } from './NestedEnumLeadSourceFilterSchema';

export const EnumLeadSourceWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLeadSourceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LeadSourceSchema).optional(),
  in: z.lazy(() => LeadSourceSchema).array().optional(),
  notIn: z.lazy(() => LeadSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSourceSchema),z.lazy(() => NestedEnumLeadSourceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLeadSourceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLeadSourceFilterSchema).optional()
}).strict();

export default EnumLeadSourceWithAggregatesFilterSchema;
