import { z } from 'zod';

/////////////////////////////////////////
// PROGRAM INVITE SCHEMA
/////////////////////////////////////////

export const ProgramInviteSchema = z.object({
  id: z.string().cuid(),
  programId: z.string(),
  email: z.string(),
  linkId: z.string(),
  createdAt: z.coerce.date(),
})

export type ProgramInvite = z.infer<typeof ProgramInviteSchema>

/////////////////////////////////////////
// PROGRAM INVITE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProgramInviteOptionalDefaultsSchema = ProgramInviteSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type ProgramInviteOptionalDefaults = z.infer<typeof ProgramInviteOptionalDefaultsSchema>

export default ProgramInviteSchema;
