import { z } from 'zod';
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// PROJECT INVITE SCHEMA
/////////////////////////////////////////

export const ProjectInviteSchema = z.object({
  role: RoleSchema,
  email: z.string(),
  expires: z.coerce.date(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
})

export type ProjectInvite = z.infer<typeof ProjectInviteSchema>

/////////////////////////////////////////
// PROJECT INVITE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProjectInviteOptionalDefaultsSchema = ProjectInviteSchema.merge(z.object({
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
}))

export type ProjectInviteOptionalDefaults = z.infer<typeof ProjectInviteOptionalDefaultsSchema>

export default ProjectInviteSchema;
