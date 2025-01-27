import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionIncludeSchema } from '../inputTypeSchemas/AutomationActionIncludeSchema'
import { AutomationActionCreateInputSchema } from '../inputTypeSchemas/AutomationActionCreateInputSchema'
import { AutomationActionUncheckedCreateInputSchema } from '../inputTypeSchemas/AutomationActionUncheckedCreateInputSchema'
import { PipelineAutomationArgsSchema } from "../outputTypeSchemas/PipelineAutomationArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AutomationActionSelectSchema: z.ZodType<Prisma.AutomationActionSelect> = z.object({
  id: z.boolean().optional(),
  automationId: z.boolean().optional(),
  field: z.boolean().optional(),
  value: z.boolean().optional(),
  template: z.boolean().optional(),
  automation: z.union([z.boolean(),z.lazy(() => PipelineAutomationArgsSchema)]).optional(),
}).strict()

export const AutomationActionCreateArgsSchema: z.ZodType<Prisma.AutomationActionCreateArgs> = z.object({
  select: AutomationActionSelectSchema.optional(),
  include: AutomationActionIncludeSchema.optional(),
  data: z.union([ AutomationActionCreateInputSchema,AutomationActionUncheckedCreateInputSchema ]),
}).strict() ;

export default AutomationActionCreateArgsSchema;
