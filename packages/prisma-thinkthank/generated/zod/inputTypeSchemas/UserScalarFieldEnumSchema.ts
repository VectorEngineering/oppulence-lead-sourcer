import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'email',
    'emailVerified',
    'image',
    'isMachine',
    'passwordHash',
    'invalidLoginAttempts',
    'lockedAt',
    'createdAt',
    'subscribed',
    'source',
    'defaultWorkspace',
    'defaultPartnerId',
    'referralLinkId',
    'fullName',
    'dateFormat',
    'locale',
    'timeFormat',
    'timezone',
    'weekStartsOnMonday'
])

export default UserScalarFieldEnumSchema
