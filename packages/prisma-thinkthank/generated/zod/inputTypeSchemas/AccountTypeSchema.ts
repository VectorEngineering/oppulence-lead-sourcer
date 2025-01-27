import { z } from 'zod'

export const AccountTypeSchema = z.enum(['depository', 'credit', 'other_asset', 'loan', 'other_liability'])

export type AccountTypeType = `${z.infer<typeof AccountTypeSchema>}`

export default AccountTypeSchema
