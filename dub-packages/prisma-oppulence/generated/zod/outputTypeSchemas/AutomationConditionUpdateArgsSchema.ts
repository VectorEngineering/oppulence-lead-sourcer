import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationConditionIncludeSchema } from '../inputTypeSchemas/AutomationConditionIncludeSchema'
import { AutomationConditionUpdateInputSchema } from '../inputTypeSchemas/AutomationConditionUpdateInputSchema'
import { AutomationConditionUncheckedUpdateInputSchema } from '../inputTypeSchemas/AutomationConditionUncheckedUpdateInputSchema'
import { AutomationConditionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationConditionWhereUniqueInputSchema'
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationConditionSelectSchema: z.ZodType<Prisma.AutomationConditionSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  operator: z.boolean().optional(),
  value: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export const AutomationConditionUpdateArgsSchema: z.ZodType<Prisma.AutomationConditionUpdateArgs> = z.object({
  select: AutomationConditionSelectSchema.optional(),
  include: AutomationConditionIncludeSchema.optional(),
  data: z.union([ AutomationConditionUpdateInputSchema,AutomationConditionUncheckedUpdateInputSchema ]),
  where: AutomationConditionWhereUniqueInputSchema,
}).strict() ;

export default AutomationConditionUpdateArgsSchema;
