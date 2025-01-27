import { z } from 'zod'

export const ReportFilterScalarFieldEnumSchema = z.enum(['id', 'reportId', 'field', 'operator', 'value', 'valueType', 'group', 'position'])

export default ReportFilterScalarFieldEnumSchema
