import { z } from 'zod'

export const AutomationActionTypeSchema = z.enum(['notify_user', 'update_field', 'create_task', 'send_email', 'webhook', 'custom'])

export type AutomationActionTypeType = `${z.infer<typeof AutomationActionTypeSchema>}`

export default AutomationActionTypeSchema
