import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { PipelineAutomationRelationFilterSchema } from './PipelineAutomationRelationFilterSchema';
import { PipelineAutomationWhereInputSchema } from './PipelineAutomationWhereInputSchema';

export const AutomationTriggerWhereInputSchema: z.ZodType<Prisma.AutomationTriggerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AutomationTriggerWhereInputSchema),z.lazy(() => AutomationTriggerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AutomationTriggerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AutomationTriggerWhereInputSchema),z.lazy(() => AutomationTriggerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  automationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  field: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  operator: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  automation: z.union([ z.lazy(() => PipelineAutomationRelationFilterSchema),z.lazy(() => PipelineAutomationWhereInputSchema) ]).optional(),
}).strict();

export default AutomationTriggerWhereInputSchema;
