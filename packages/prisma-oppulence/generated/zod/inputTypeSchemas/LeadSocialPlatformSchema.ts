import { z } from 'zod'

export const LeadSocialPlatformSchema = z.enum(['linkedin', 'twitter', 'facebook', 'instagram', 'youtube', 'tiktok', 'other'])

export type LeadSocialPlatformType = `${z.infer<typeof LeadSocialPlatformSchema>}`

export default LeadSocialPlatformSchema
