import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPrioritySchema } from './LeadPrioritySchema';

export const NestedEnumLeadPriorityFilterSchema: z.ZodType<Prisma.NestedEnumLeadPriorityFilter> = z.object({
  equals: z.lazy(() => LeadPrioritySchema).optional(),
  in: z.lazy(() => LeadPrioritySchema).array().optional(),
  notIn: z.lazy(() => LeadPrioritySchema).array().optional(),
  not: z.union([ z.lazy(() => LeadPrioritySchema),z.lazy(() => NestedEnumLeadPriorityFilterSchema) ]).optional(),
}).strict();

export default NestedEnumLeadPriorityFilterSchema;
