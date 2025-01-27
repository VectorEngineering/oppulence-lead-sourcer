import { z } from 'zod';
import { PartnerRoleSchema } from '../inputTypeSchemas/PartnerRoleSchema'

/////////////////////////////////////////
// PARTNER INVITE SCHEMA
/////////////////////////////////////////

export const PartnerInviteSchema = z.object({
  role: PartnerRoleSchema,
  email: z.string(),
  expires: z.coerce.date(),
  partnerId: z.string(),
  createdAt: z.coerce.date(),
})

export type PartnerInvite = z.infer<typeof PartnerInviteSchema>

/////////////////////////////////////////
// PARTNER INVITE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PartnerInviteOptionalDefaultsSchema = PartnerInviteSchema.merge(z.object({
  role: PartnerRoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
}))

export type PartnerInviteOptionalDefaults = z.infer<typeof PartnerInviteOptionalDefaultsSchema>

export default PartnerInviteSchema;
