import { z } from 'zod';

export const MarketingChannelSchema = z.enum(['referral','inbound','outbound','partner','event','direct','online_ad','social_media','other']);

export type MarketingChannelType = `${z.infer<typeof MarketingChannelSchema>}`

export default MarketingChannelSchema;
