import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationTriggerTypeSchema } from './AutomationTriggerTypeSchema';
import { AutomationActionTypeSchema } from './AutomationActionTypeSchema';
import { PipelineCreateNestedOneWithoutAutomationsInputSchema } from './PipelineCreateNestedOneWithoutAutomationsInputSchema';
import { AutomationTriggerCreateNestedManyWithoutAutomationInputSchema } from './AutomationTriggerCreateNestedManyWithoutAutomationInputSchema';
import { AutomationConditionCreateNestedManyWithoutAutomationInputSchema } from './AutomationConditionCreateNestedManyWithoutAutomationInputSchema';

export const PipelineAutomationCreateWithoutActionsInputSchema: z.ZodType<Prisma.PipelineAutomationCreateWithoutActionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  triggerType: z.lazy(() => AutomationTriggerTypeSchema),
  actionType: z.lazy(() => AutomationActionTypeSchema),
  priority: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastTriggered: z.coerce.date().optional().nullable(),
  pipeline: z.lazy(() => PipelineCreateNestedOneWithoutAutomationsInputSchema),
  triggers: z.lazy(() => AutomationTriggerCreateNestedManyWithoutAutomationInputSchema).optional(),
  conditions: z.lazy(() => AutomationConditionCreateNestedManyWithoutAutomationInputSchema).optional()
}).strict();

export default PipelineAutomationCreateWithoutActionsInputSchema;
