import { z } from 'zod'

export const UserOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'email',
    'name',
    'firstName',
    'lastName',
    'imageUrl',
    'username',
    'profileImageUrl',
    'stripeCustomerId',
    'companyName',
    'role',
    'useCase'
])

export default UserOrderByRelevanceFieldEnumSchema
