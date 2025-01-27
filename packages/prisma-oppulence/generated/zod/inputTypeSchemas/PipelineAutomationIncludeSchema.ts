import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { AutomationTriggerFindManyArgsSchema } from "../outputTypeSchemas/AutomationTriggerFindManyArgsSchema"
import { AutomationActionFindManyArgsSchema } from "../outputTypeSchemas/AutomationActionFindManyArgsSchema"
import { AutomationConditionFindManyArgsSchema } from "../outputTypeSchemas/AutomationConditionFindManyArgsSchema"
import { PipelineAutomationCountOutputTypeArgsSchema } from "../outputTypeSchemas/PipelineAutomationCountOutputTypeArgsSchema"

export const PipelineAutomationIncludeSchema: z.ZodType<Prisma.PipelineAutomationInclude> = z.object({
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  triggers: z.union([z.boolean(),z.lazy(() => AutomationTriggerFindManyArgsSchema)]).optional(),
  actions: z.union([z.boolean(),z.lazy(() => AutomationActionFindManyArgsSchema)]).optional(),
  conditions: z.union([z.boolean(),z.lazy(() => AutomationConditionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PipelineAutomationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PipelineAutomationIncludeSchema;
