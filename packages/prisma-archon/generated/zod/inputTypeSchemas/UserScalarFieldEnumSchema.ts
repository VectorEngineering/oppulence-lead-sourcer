import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
    'id',
    'email',
    'name',
    'firstName',
    'lastName',
    'imageUrl',
    'username',
    'profileImageUrl',
    'hasImage',
    'lastSignInAt',
    'lastActiveAt',
    'banned',
    'passwordEnabled',
    'twoFactorEnabled',
    'publicMetadata',
    'privateMetadata',
    'unsafeMetadata',
    'emailVerified',
    'leadCount',
    'plan',
    'stripeCustomerId',
    'createdAt',
    'updatedAt',
    'onboardingComplete',
    'companyName',
    'role',
    'useCase'
])

export default UserScalarFieldEnumSchema
