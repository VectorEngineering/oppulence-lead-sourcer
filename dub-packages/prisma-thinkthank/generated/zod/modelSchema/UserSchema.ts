import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullish(),
  email: z.string().nullish(),
  emailVerified: z.coerce.date().nullish(),
  image: z.string().nullish(),
  isMachine: z.boolean(),
  passwordHash: z.string().nullish(),
  invalidLoginAttempts: z.number().int(),
  lockedAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  subscribed: z.boolean(),
  source: z.string().nullish(),
  defaultWorkspace: z.string().nullish(),
  defaultPartnerId: z.string().nullish(),
  referralLinkId: z.string().nullish(),
  fullName: z.string().nullish(),
  dateFormat: z.string().nullish(),
  locale: z.string().nullish(),
  timeFormat: z.number().int().nullish(),
  timezone: z.string().nullish(),
  weekStartsOnMonday: z.boolean().nullish(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserOptionalDefaultsSchema = UserSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isMachine: z.boolean().optional(),
  invalidLoginAttempts: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  subscribed: z.boolean().optional(),
}))

export type UserOptionalDefaults = z.infer<typeof UserOptionalDefaultsSchema>

export default UserSchema;
