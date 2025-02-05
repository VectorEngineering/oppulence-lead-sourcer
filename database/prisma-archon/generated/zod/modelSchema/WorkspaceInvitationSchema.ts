import { z } from 'zod'

/////////////////////////////////////////
// WORKSPACE INVITATION SCHEMA
/////////////////////////////////////////

export const WorkspaceInvitationSchema = z.object({
    id: z.string().cuid(),
    workspaceId: z.string(),
    email: z.string(),
    token: z.string(),
    status: z.string(),
    expiresAt: z.coerce.date(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type WorkspaceInvitation = z.infer<typeof WorkspaceInvitationSchema>

/////////////////////////////////////////
// WORKSPACE INVITATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const WorkspaceInvitationOptionalDefaultsSchema = WorkspaceInvitationSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        status: z.string().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type WorkspaceInvitationOptionalDefaults = z.infer<typeof WorkspaceInvitationOptionalDefaultsSchema>

export default WorkspaceInvitationSchema
