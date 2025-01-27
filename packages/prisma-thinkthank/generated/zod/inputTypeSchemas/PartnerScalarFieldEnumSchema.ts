import { z } from 'zod'

export const PartnerScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'email',
    'image',
    'bio',
    'country',
    'status',
    'stripeConnectId',
    'payoutsEnabled',
    'showOnLeaderboard',
    'createdAt',
    'updatedAt'
])

export default PartnerScalarFieldEnumSchema
