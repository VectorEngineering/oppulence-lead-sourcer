import { z } from 'zod'

export const ProgramTypeSchema = z.enum(['affiliate', 'referral'])

export type ProgramTypeType = `${z.infer<typeof ProgramTypeSchema>}`

export default ProgramTypeSchema
