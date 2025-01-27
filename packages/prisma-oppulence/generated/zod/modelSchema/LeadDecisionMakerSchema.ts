import { z } from 'zod'

/////////////////////////////////////////
// LEAD DECISION MAKER SCHEMA
/////////////////////////////////////////

export const LeadDecisionMakerSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    name: z.string(),
    title: z.string().nullish(),
    email: z.string().nullish(),
    phone: z.string().nullish(),
    influence: z.string(),
    notes: z.string().nullish()
})

export type LeadDecisionMaker = z.infer<typeof LeadDecisionMakerSchema>

/////////////////////////////////////////
// LEAD DECISION MAKER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadDecisionMakerOptionalDefaultsSchema = LeadDecisionMakerSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type LeadDecisionMakerOptionalDefaults = z.infer<typeof LeadDecisionMakerOptionalDefaultsSchema>

export default LeadDecisionMakerSchema
