import { z } from 'zod'

export const LeadMetadataScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'key',
    'value',
    'type',
    'category',
    'description',
    'isSearchable',
    'createdAt',
    'updatedAt'
])

export default LeadMetadataScalarFieldEnumSchema
