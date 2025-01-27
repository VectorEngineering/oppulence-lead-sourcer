import { z } from 'zod'

export const NurtureStatusSchema = z.enum(['ACTIVE', 'PAUSED', 'COMPLETED', 'FAILED'])

export type NurtureStatusType = `${z.infer<typeof NurtureStatusSchema>}`

export default NurtureStatusSchema
