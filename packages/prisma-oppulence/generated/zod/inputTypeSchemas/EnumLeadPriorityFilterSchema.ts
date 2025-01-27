import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPrioritySchema } from './LeadPrioritySchema';
import { NestedEnumLeadPriorityFilterSchema } from './NestedEnumLeadPriorityFilterSchema';

export const EnumLeadPriorityFilterSchema: z.ZodType<Prisma.EnumLeadPriorityFilter> = z.object({
  equals: z.lazy(() => LeadPrioritySchema).optional(),
  in: z.lazy(() => LeadPrioritySchema).array().optional(),
  notIn: z.lazy(() => LeadPrioritySchema).array().optional(),
  not: z.union([ z.lazy(() => LeadPrioritySchema),z.lazy(() => NestedEnumLeadPriorityFilterSchema) ]).optional(),
}).strict();

export default EnumLeadPriorityFilterSchema;
