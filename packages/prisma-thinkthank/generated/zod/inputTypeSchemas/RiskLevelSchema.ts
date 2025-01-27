import { z } from 'zod'

export const RiskLevelSchema = z.enum(['LOW', 'NORMAL', 'HIGH', 'CRITICAL'])

export type RiskLevelType = `${z.infer<typeof RiskLevelSchema>}`

export default RiskLevelSchema
