import { z } from 'zod'

export const BankAccountOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'accountId',
    'accountReference',
    'accountNumber',
    'routingNumber',
    'mask',
    'name',
    'officialName',
    'displayName',
    'description',
    'currency',
    'baseCurrency',
    'errorDetails',
    'reviewNotes',
    'bankConnectionId',
    'projectId',
    'createdBy'
])

export default BankAccountOrderByRelevanceFieldEnumSchema
