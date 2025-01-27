import { z } from 'zod';
import { PartnerStatusSchema } from '../inputTypeSchemas/PartnerStatusSchema'

/////////////////////////////////////////
// PARTNER SCHEMA
/////////////////////////////////////////

export const PartnerSchema = z.object({
  status: PartnerStatusSchema,
  id: z.string().cuid(),
  name: z.string(),
  email: z.string(),
  image: z.string().nullish(),
  bio: z.string().nullish(),
  country: z.string(),
  stripeConnectId: z.string().nullish(),
  payoutsEnabled: z.boolean(),
  showOnLeaderboard: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Partner = z.infer<typeof PartnerSchema>

/////////////////////////////////////////
// PARTNER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PartnerOptionalDefaultsSchema = PartnerSchema.merge(z.object({
  status: PartnerStatusSchema.optional(),
  id: z.string().cuid().optional(),
  payoutsEnabled: z.boolean().optional(),
  showOnLeaderboard: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PartnerOptionalDefaults = z.infer<typeof PartnerOptionalDefaultsSchema>

export default PartnerSchema;
