import { z } from 'zod'

export const SyncFrequencySchema = z.enum(['REALTIME', 'DAILY', 'WEEKLY'])

export type SyncFrequencyType = `${z.infer<typeof SyncFrequencySchema>}`

export default SyncFrequencySchema
