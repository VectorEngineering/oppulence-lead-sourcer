import { z } from 'zod'

export const DealHistoryOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'dealId',
    'field',
    'oldValue',
    'newValue',
    'description',
    'createdBy'
])

export default DealHistoryOrderByRelevanceFieldEnumSchema
