import { z } from 'zod'

export const LogTypeSchema = z.enum(['success', 'error'])

export type LogTypeType = `${z.infer<typeof LogTypeSchema>}`

export default LogTypeSchema
