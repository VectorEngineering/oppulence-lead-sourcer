import { z } from 'zod';

/////////////////////////////////////////
// WORKSPACE MEMBER SCHEMA
/////////////////////////////////////////

export const WorkspaceMemberSchema = z.object({
  id: z.string().cuid(),
  workspaceId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type WorkspaceMember = z.infer<typeof WorkspaceMemberSchema>

/////////////////////////////////////////
// WORKSPACE MEMBER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkspaceMemberOptionalDefaultsSchema = WorkspaceMemberSchema.merge(z.object({
  id: z.string().cuid().optional(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type WorkspaceMemberOptionalDefaults = z.infer<typeof WorkspaceMemberOptionalDefaultsSchema>

export default WorkspaceMemberSchema;
