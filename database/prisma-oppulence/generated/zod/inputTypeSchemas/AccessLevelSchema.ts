import { z } from 'zod'

export const AccessLevelSchema = z.enum(['none', 'read', 'write', 'admin'])

export type AccessLevelType = `${z.infer<typeof AccessLevelSchema>}`

export default AccessLevelSchema
