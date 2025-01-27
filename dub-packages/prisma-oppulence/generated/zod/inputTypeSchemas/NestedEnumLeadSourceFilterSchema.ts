import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSourceSchema } from './LeadSourceSchema';

export const NestedEnumLeadSourceFilterSchema: z.ZodType<Prisma.NestedEnumLeadSourceFilter> = z.object({
  equals: z.lazy(() => LeadSourceSchema).optional(),
  in: z.lazy(() => LeadSourceSchema).array().optional(),
  notIn: z.lazy(() => LeadSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => LeadSourceSchema),z.lazy(() => NestedEnumLeadSourceFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLeadSourceFilterSchema;
