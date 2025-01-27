import { z } from 'zod'

export const CampaignVariantScalarFieldEnumSchema = z.enum(['id', 'campaignId', 'name', 'description', 'content', 'metrics'])

export default CampaignVariantScalarFieldEnumSchema
