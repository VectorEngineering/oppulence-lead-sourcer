import { z } from 'zod'

export const UserOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'name',
    'email',
    'image',
    'passwordHash',
    'source',
    'defaultWorkspace',
    'defaultPartnerId',
    'referralLinkId',
    'fullName',
    'dateFormat',
    'locale',
    'timezone'
])

export default UserOrderByRelevanceFieldEnumSchema
