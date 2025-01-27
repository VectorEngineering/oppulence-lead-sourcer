import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationTriggerIncludeSchema } from '../inputTypeSchemas/AutomationTriggerIncludeSchema'
import { AutomationTriggerUpdateInputSchema } from '../inputTypeSchemas/AutomationTriggerUpdateInputSchema'
import { AutomationTriggerUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutomationTriggerUncheckedUpdateInputSchema'
import { AutomationTriggerWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationTriggerWhereUniqueInputSchema'
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationTriggerSelectSchema: z.ZodType<Prisma.AutomationTriggerSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export const AutomationTriggerUpdateArgsSchema: z.ZodType<Prisma.AutomationTriggerUpdateArgs> = z.object({
  select: AutomationTriggerSelectSchema.optional(),
  include: AutomationTriggerIncludeSchema.optional(),
  data: z.union([ AutomationTriggerUpdateInputSchema,AutomationTriggerUncheckedUpdateInputSchema ]),
  where: AutomationTriggerWhereUniqueInputSchema,
}).strict() ;

export default AutomationTriggerUpdateArgsSchema;
