import { z } from 'zod';
import { AutomationTriggerTypeSchema } from '../inputTypeSchemas/AutomationTriggerTypeSchema'
import { AutomationActionTypeSchema } from '../inputTypeSchemas/AutomationActionTypeSchema'

/////////////////////////////////////////
// PIPELINE AUTOMATION SCHEMA
/////////////////////////////////////////

export const PipelineAutomationSchema = z.object({
  triggerType: AutomationTriggerTypeSchema,
  actionType: AutomationActionTypeSchema,
  id: z.string().cuid(),
  pipelineId: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  isActive: z.boolean(),
  priority: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  lastTriggered: z.coerce.date().nullish(),
})

export type PipelineAutomation = z.infer<typeof PipelineAutomationSchema>

/////////////////////////////////////////
// PIPELINE AUTOMATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineAutomationOptionalDefaultsSchema = PipelineAutomationSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isActive: z.boolean().optional(),
  priority: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PipelineAutomationOptionalDefaults = z.infer<typeof PipelineAutomationOptionalDefaultsSchema>

export default PipelineAutomationSchema;
