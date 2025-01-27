import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { PlanSchema } from '../inputTypeSchemas/PlanSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  plan: PlanSchema.nullish(),
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  imageUrl: z.string().nullish(),
  username: z.string().nullish(),
  profileImageUrl: z.string().nullish(),
  hasImage: z.boolean(),
  lastSignInAt: z.coerce.date().nullish(),
  lastActiveAt: z.coerce.date().nullish(),
  banned: z.boolean(),
  passwordEnabled: z.boolean(),
  twoFactorEnabled: z.boolean(),
  publicMetadata: JsonValueSchema.nullable(),
  privateMetadata: JsonValueSchema.nullable(),
  unsafeMetadata: JsonValueSchema.nullable(),
  emailVerified: z.boolean(),
  leadCount: z.number().int(),
  stripeCustomerId: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  onboardingComplete: z.boolean(),
  companyName: z.string().nullish(),
  role: z.string().nullish(),
  useCase: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  hasImage: z.boolean().optional(),
  banned: z.boolean().optional(),
  passwordEnabled: z.boolean().optional(),
  twoFactorEnabled: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  leadCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  onboardingComplete: z.boolean().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

export default UserSchema;
