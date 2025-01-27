import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema';
import { NestedEnumAutomationTriggerTypeFilterSchema } from './NestedEnumAutomationTriggerTypeFilterSchema';

export const EnumAutomationTriggerTypeFilterSchema: z.ZodType<Prisma.EnumAutomationTriggerTypeFilter> = z.object({
  equals: z.lazy(() => AutomationTriggerTypeSchema).optional(),
  in: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  notIn: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AutomationTriggerTypeSchema),z.lazy(() => NestedEnumAutomationTriggerTypeFilterSchema) ]).optional(),
}).strict();

export default EnumAutomationTriggerTypeFilterSchema;
