import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAutomationTriggerTypeFilterSchema } from './NestedEnumAutomationTriggerTypeFilterSchema';

export const NestedEnumAutomationTriggerTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAutomationTriggerTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => AutomationTriggerTypeSchema).optional(),
  in: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  notIn: z.lazy(() => AutomationTriggerTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => AutomationTriggerTypeSchema),z.lazy(() => NestedEnumAutomationTriggerTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAutomationTriggerTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAutomationTriggerTypeFilterSchema).optional()
}).strict();

export default NestedEnumAutomationTriggerTypeWithAggregatesFilterSchema;
