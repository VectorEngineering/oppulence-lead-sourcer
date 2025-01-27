import { z } from 'zod';

/////////////////////////////////////////
// AUTOMATION ACTION SCHEMA
/////////////////////////////////////////

export const AutomationActionSchema = z.object({
  id: z.string().cuid(),
  automationId: z.string(),
  field: z.string(),
  value: z.string(),
  template: z.string().nullish(),
})

export type AutomationAction = z.infer<typeof AutomationActionSchema>

/////////////////////////////////////////
// AUTOMATION ACTION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AutomationActionOptionalDefaultsSchema = AutomationActionSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type AutomationActionOptionalDefaults = z.infer<typeof AutomationActionOptionalDefaultsSchema>

export default AutomationActionSchema;
