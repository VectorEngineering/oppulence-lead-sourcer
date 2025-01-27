import { z } from 'zod'

export const FeedbackTypeSchema = z.enum(['SURVEY', 'DIRECT', 'SOCIAL', 'REVIEW', 'SUPPORT_TICKET', 'OTHER'])

export type FeedbackTypeType = `${z.infer<typeof FeedbackTypeSchema>}`

export default FeedbackTypeSchema
