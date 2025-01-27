import { z } from 'zod'

/////////////////////////////////////////
// AUTOMATION TRIGGER SCHEMA
/////////////////////////////////////////

export const AutomationTriggerSchema = z.object({
    id: z.string().cuid(),
    automationId: z.string(),
    field: z.string(),
    operator: z.string(),
    value: z.string()
})

export type AutomationTrigger = z.infer<typeof AutomationTriggerSchema>

/////////////////////////////////////////
// AUTOMATION TRIGGER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AutomationTriggerOptionalDefaultsSchema = AutomationTriggerSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type AutomationTriggerOptionalDefaults = z.infer<typeof AutomationTriggerOptionalDefaultsSchema>

export default AutomationTriggerSchema
