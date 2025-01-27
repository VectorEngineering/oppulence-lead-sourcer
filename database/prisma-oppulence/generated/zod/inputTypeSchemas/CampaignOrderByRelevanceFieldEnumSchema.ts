import { z } from 'zod'

export const CampaignOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'name',
    'description',
    'utmSource',
    'utmMedium',
    'utmCampaign',
    'utmContent',
    'utmTerm'
])

export default CampaignOrderByRelevanceFieldEnumSchema
