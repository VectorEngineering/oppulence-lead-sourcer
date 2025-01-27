import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PipelineAutomationCreateNestedOneWithoutConditionsInputSchema } from './PipelineAutomationCreateNestedOneWithoutConditionsInputSchema';

export const AutomationConditionCreateInputSchema: z.ZodType<Prisma.AutomationConditionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  field: z.string(),
  operator: z.string(),
  value: z.string(),
  automation: z.lazy(() => PipelineAutomationCreateNestedOneWithoutConditionsInputSchema)
}).strict();

export default AutomationConditionCreateInputSchema;
