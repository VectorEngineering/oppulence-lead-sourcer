import { z } from 'zod'

export const ReportStatusSchema = z.enum(['queued', 'generating', 'completed', 'failed', 'expired'])

export type ReportStatusType = `${z.infer<typeof ReportStatusSchema>}`

export default ReportStatusSchema
