import { z } from 'zod'

export const InboxAccessLevelSchema = z.enum(['private', 'team', 'restricted', 'public'])

export type InboxAccessLevelType = `${z.infer<typeof InboxAccessLevelSchema>}`

export default InboxAccessLevelSchema
