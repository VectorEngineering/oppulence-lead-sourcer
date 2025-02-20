import { z } from 'zod'

export const ReportScheduleScalarFieldEnumSchema = z.enum([
    'id',
    'reportId',
    'frequency',
    'dayOfWeek',
    'dayOfMonth',
    'hour',
    'minute',
    'isActive',
    'lastRun',
    'nextRun'
])

export default ReportScheduleScalarFieldEnumSchema
