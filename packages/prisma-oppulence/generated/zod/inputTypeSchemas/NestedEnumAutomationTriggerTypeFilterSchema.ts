import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema';

export const NestedEnumAutomationTriggerTypeFilterSchema: z.ZodType<Prisma.NestedEnumAutomationTriggerTypeFilter> = z.object({
  equals: z.lazy(() => AutomationTriggerTypeSchema).optional(),
  in: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  notIn: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AutomationTriggerTypeSchema),z.lazy(() => NestedEnumAutomationTriggerTypeFilterSchema) ]).optional(),
}).strict();

export default NestedEnumAutomationTriggerTypeFilterSchema;
