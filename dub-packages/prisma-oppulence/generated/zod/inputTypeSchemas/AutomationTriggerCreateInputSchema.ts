import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateNestedOneWithoutTriggersInputSchema } from './PipelineAutomationCreateNestedOneWithoutTriggersInputSchema';

export const AutomationTriggerCreateInputSchema: z.ZodType<Prisma.AutomationTriggerCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field: z.string(),
  operator: z.string(),
  value: z.string(),
  automation: z.lazy(() => PipelineAutomationCreateNestedOneWithoutTriggersInputSchema)
}).strict();

export default AutomationTriggerCreateInputSchema;
