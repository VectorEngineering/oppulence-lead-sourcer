import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"

export const AutomationTriggerSelectSchema: z.ZodType<Prisma.AutomationTriggerSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export default AutomationTriggerSelectSchema;
