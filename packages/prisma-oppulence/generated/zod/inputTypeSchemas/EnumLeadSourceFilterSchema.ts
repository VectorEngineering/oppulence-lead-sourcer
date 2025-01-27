import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSourceSchema } from './LeadSourceSchema';
import { NestedEnumLeadSourceFilterSchema } from './NestedEnumLeadSourceFilterSchema';

export const EnumLeadSourceFilterSchema: z.ZodType<Prisma.EnumLeadSourceFilter> = z.object({
  equals: z.lazy(() => LeadSourceSchema).optional(),
  in: z.lazy(() => LeadSourceSchema).array().optional(),
  notIn: z.lazy(() => LeadSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSourceSchema),z.lazy(() => NestedEnumLeadSourceFilterSchema) ]).optional(),
}).strict();

export default EnumLeadSourceFilterSchema;
