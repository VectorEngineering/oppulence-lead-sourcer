import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const AutomationTriggerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AutomationTriggerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AutomationTriggerScalarWhereWithAggregatesInputSchema),z.lazy(() => AutomationTriggerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutomationTriggerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutomationTriggerScalarWhereWithAggregatesInputSchema),z.lazy(() => AutomationTriggerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  automationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  operator: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default AutomationTriggerScalarWhereWithAggregatesInputSchema;
