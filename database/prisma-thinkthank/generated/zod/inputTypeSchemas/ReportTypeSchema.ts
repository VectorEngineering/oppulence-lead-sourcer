import { z } from 'zod'

export const ReportTypeSchema = z.enum([
    'contract',
    'customer',
    'transaction',
    'financial',
    'compliance',
    'analytics',
    'audit',
    'performance'
])

export type ReportTypeType = `${z.infer<typeof ReportTypeSchema>}`

export default ReportTypeSchema
