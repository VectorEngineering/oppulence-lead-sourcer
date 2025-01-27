import { z } from 'zod';

export const CampaignVariantOrderByRelevanceFieldEnumSchema = z.enum(['id','campaignId','name','description']);

export default CampaignVariantOrderByRelevanceFieldEnumSchema;
