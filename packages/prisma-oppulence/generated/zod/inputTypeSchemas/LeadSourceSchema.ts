import { z } from 'zod'

export const LeadSourceSchema = z.enum([
    'website',
    'referral',
    'cold_call',
    'email_campaign',
    'social_media',
    'trade_show',
    'partner',
    'existing_customer',
    'other'
])

export type LeadSourceType = `${z.infer<typeof LeadSourceSchema>}`

export default LeadSourceSchema
