import { z } from 'zod'

export const BankConnectionSettingsOrderByRelevanceFieldEnumSchema = z.enum(['id', 'syncStartTime', 'bankConnectionId', 'createdBy'])

export default BankConnectionSettingsOrderByRelevanceFieldEnumSchema
