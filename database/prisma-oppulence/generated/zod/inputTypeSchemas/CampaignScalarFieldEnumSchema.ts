import { z } from 'zod'

export const CampaignScalarFieldEnumSchema = z.enum([
    'id',
    'name',
    'description',
    'type',
    'status',
    'budget',
    'actualSpend',
    'startDate',
    'endDate',
    'impressions',
    'clicks',
    'conversions',
    'revenue',
    'roi',
    'utmSource',
    'utmMedium',
    'utmCampaign',
    'utmContent',
    'utmTerm',
    'abTestEnabled',
    'createdAt',
    'updatedAt'
])

export default CampaignScalarFieldEnumSchema
