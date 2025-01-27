import { z } from 'zod'

export const CampaignStatusSchema = z.enum(['DRAFT', 'SCHEDULED', 'ACTIVE', 'PAUSED', 'COMPLETED', 'CANCELLED'])

export type CampaignStatusType = `${z.infer<typeof CampaignStatusSchema>}`

export default CampaignStatusSchema
