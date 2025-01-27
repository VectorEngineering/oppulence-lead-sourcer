import { z } from 'zod'

export const AutomationTriggerTypeSchema = z.enum([
    'stage_entry',
    'stage_exit',
    'deal_value_change',
    'probability_change',
    'task_completion',
    'activity_creation',
    'custom'
])

export type AutomationTriggerTypeType = `${z.infer<typeof AutomationTriggerTypeSchema>}`

export default AutomationTriggerTypeSchema
