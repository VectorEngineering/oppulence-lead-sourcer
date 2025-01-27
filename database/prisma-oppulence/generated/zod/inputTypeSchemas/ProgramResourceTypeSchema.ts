import { z } from 'zod'

export const ProgramResourceTypeSchema = z.enum(['logo', 'files'])

export type ProgramResourceTypeType = `${z.infer<typeof ProgramResourceTypeSchema>}`

export default ProgramResourceTypeSchema
