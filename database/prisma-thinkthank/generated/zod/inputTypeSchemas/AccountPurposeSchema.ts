import { z } from 'zod'

export const AccountPurposeSchema = z.enum(['OPERATING', 'PAYROLL', 'SAVINGS', 'TAXES', 'PETTY_CASH', 'INVESTMENTS', 'EXPENSES', 'OTHER'])

export type AccountPurposeType = `${z.infer<typeof AccountPurposeSchema>}`

export default AccountPurposeSchema
