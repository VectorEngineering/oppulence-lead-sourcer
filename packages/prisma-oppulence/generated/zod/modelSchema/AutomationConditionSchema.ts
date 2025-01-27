import { z } from 'zod';

/////////////////////////////////////////
// AUTOMATION CONDITION SCHEMA
/////////////////////////////////////////

export const AutomationConditionSchema = z.object({
  id: z.string().cuid(),
  automationId: z.string(),
  field: z.string(),
  operator: z.string(),
  value: z.string(),
})

export type AutomationCondition = z.infer<typeof AutomationConditionSchema>

/////////////////////////////////////////
// AUTOMATION CONDITION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AutomationConditionOptionalDefaultsSchema = AutomationConditionSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type AutomationConditionOptionalDefaults = z.infer<typeof AutomationConditionOptionalDefaultsSchema>

export default AutomationConditionSchema;
