import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"

export const AutomationTriggerIncludeSchema: z.ZodType<Prisma.AutomationTriggerInclude> = z.object({
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export default AutomationTriggerIncludeSchema;
