import { z } from 'zod'

export const StorageLocationSchema = z.enum(['local', 'cloud', 'archive', 'backup', 'cold_storage'])

export type StorageLocationType = `${z.infer<typeof StorageLocationSchema>}`

export default StorageLocationSchema
