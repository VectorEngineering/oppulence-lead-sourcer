import { z } from 'zod'
import { RoleSchema } from '../inputTypeSchemas/RoleSchema'

/////////////////////////////////////////
// PROJECT USERS SCHEMA
/////////////////////////////////////////

export const ProjectUsersSchema = z.object({
    role: RoleSchema,
    id: z.string().cuid(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    userId: z.string(),
    projectId: z.string()
})

export type ProjectUsers = z.infer<typeof ProjectUsersSchema>

/////////////////////////////////////////
// PROJECT USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProjectUsersOptionalDefaultsSchema = ProjectUsersSchema.merge(
    z.object({
        role: RoleSchema.optional(),
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ProjectUsersOptionalDefaults = z.infer<typeof ProjectUsersOptionalDefaultsSchema>

export default ProjectUsersSchema
