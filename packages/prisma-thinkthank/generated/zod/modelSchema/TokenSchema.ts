import { z } from 'zod';

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  hashedKey: z.string(),
  partialKey: z.string(),
  expires: z.coerce.date().nullish(),
  lastUsed: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
})

export type Token = z.infer<typeof TokenSchema>

/////////////////////////////////////////
// TOKEN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TokenOptionalDefaultsSchema = TokenSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type TokenOptionalDefaults = z.infer<typeof TokenOptionalDefaultsSchema>

export default TokenSchema;
