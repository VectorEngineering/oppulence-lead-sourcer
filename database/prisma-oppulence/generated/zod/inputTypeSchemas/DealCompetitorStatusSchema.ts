import { z } from 'zod'

export const DealCompetitorStatusSchema = z.enum(['active', 'won', 'lost', 'evaluating'])

export type DealCompetitorStatusType = `${z.infer<typeof DealCompetitorStatusSchema>}`

export default DealCompetitorStatusSchema
