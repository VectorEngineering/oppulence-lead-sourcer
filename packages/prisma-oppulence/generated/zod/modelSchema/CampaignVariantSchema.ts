import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// CAMPAIGN VARIANT SCHEMA
/////////////////////////////////////////

export const CampaignVariantSchema = z.object({
    id: z.string().cuid(),
    campaignId: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    content: JsonValueSchema,
    metrics: JsonValueSchema
})

export type CampaignVariant = z.infer<typeof CampaignVariantSchema>

/////////////////////////////////////////
// CAMPAIGN VARIANT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CampaignVariantOptionalDefaultsSchema = CampaignVariantSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type CampaignVariantOptionalDefaults = z.infer<typeof CampaignVariantOptionalDefaultsSchema>

export default CampaignVariantSchema
