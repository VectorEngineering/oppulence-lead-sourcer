import { z } from 'zod'

export const RoleSchema = z.enum(['owner', 'member'])

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema
