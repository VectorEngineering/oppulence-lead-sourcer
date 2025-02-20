import { z } from 'zod'

export const InboxClassificationSchema = z.enum(['public', 'internal', 'confidential', 'restricted', 'sensitive', 'critical'])

export type InboxClassificationType = `${z.infer<typeof InboxClassificationSchema>}`

export default InboxClassificationSchema
