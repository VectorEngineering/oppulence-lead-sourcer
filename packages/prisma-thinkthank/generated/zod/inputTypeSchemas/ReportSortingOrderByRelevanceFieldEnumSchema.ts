import { z } from 'zod'

export const ReportSortingOrderByRelevanceFieldEnumSchema = z.enum(['id', 'reportId', 'field'])

export default ReportSortingOrderByRelevanceFieldEnumSchema
