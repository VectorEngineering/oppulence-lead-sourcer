import { z } from 'zod'

export const ReportAccessOrderByRelevanceFieldEnumSchema = z.enum(['id', 'reportId', 'userId', 'accessType'])

export default ReportAccessOrderByRelevanceFieldEnumSchema
