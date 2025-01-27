import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInputSchema } from './PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInputSchema';

export const AutomationConditionUpdateInputSchema: z.ZodType<Prisma.AutomationConditionUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  field: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  operator: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  automation: z.lazy(() => PipelineAutomationUpdateOneRequiredWithoutConditionsNestedInputSchema).optional()
}).strict();

export default AutomationConditionUpdateInputSchema;
