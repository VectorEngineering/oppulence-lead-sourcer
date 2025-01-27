import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AutomationActionIncludeSchema } from '../inputTypeSchemas/AutomationActionIncludeSchema'
import { AutomationActionWhereUniqueInputSchema } from '../inputTypeSchemas/AutomationActionWhereUniqueInputSchema'
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

export const AutomationActionFindUniqueArgsSchema: z.ZodType<Prisma.AutomationActionFindUniqueArgs> = z.object({
  select: AutomationActionSelectSchema.optional(),
  include: AutomationActionIncludeSchema.optional(),
  where: AutomationActionWhereUniqueInputSchema,
}).strict() ;

export default AutomationActionFindUniqueArgsSchema;
