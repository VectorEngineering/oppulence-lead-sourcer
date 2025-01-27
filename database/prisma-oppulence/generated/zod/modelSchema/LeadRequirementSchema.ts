import { z } from 'zod'

/////////////////////////////////////////
// LEAD REQUIREMENT SCHEMA
/////////////////////////////////////////

export const LeadRequirementSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    category: z.string(),
    priority: z.string(),
    description: z.string(),
    status: z.string(),
    notes: z.string().nullish()
})

export type LeadRequirement = z.infer<typeof LeadRequirementSchema>

/////////////////////////////////////////
// LEAD REQUIREMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadRequirementOptionalDefaultsSchema = LeadRequirementSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type LeadRequirementOptionalDefaults = z.infer<typeof LeadRequirementOptionalDefaultsSchema>

export default LeadRequirementSchema
