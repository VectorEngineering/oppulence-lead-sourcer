import { z } from 'zod';

export const CampaignTypeSchema = z.enum(['EMAIL','SOCIAL_MEDIA','PPC','CONTENT','EVENT','REFERRAL','DIRECT_MAIL','OTHER']);

export type CampaignTypeType = `${z.infer<typeof CampaignTypeSchema>}`

export default CampaignTypeSchema;
