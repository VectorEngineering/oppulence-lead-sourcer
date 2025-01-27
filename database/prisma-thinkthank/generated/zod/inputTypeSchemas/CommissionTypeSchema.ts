import { z } from 'zod'

export const CommissionTypeSchema = z.enum(['percentage', 'flat'])

export type CommissionTypeType = `${z.infer<typeof CommissionTypeSchema>}`

export default CommissionTypeSchema
