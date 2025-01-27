import { z } from 'zod'

/////////////////////////////////////////
// LEAD HISTORY SCHEMA
/////////////////////////////////////////

export const LeadHistorySchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    action: z.string(),
    description: z.string(),
    changes: z.string().nullish(),
    metadata: z.string().nullish(),
    createdAt: z.coerce.date(),
    createdBy: z.string().nullish(),
    changeType: z.string().nullish(),
    source: z.string().nullish(),
    ipAddress: z.string().nullish(),
    userAgent: z.string().nullish()
})

export type LeadHistory = z.infer<typeof LeadHistorySchema>

/////////////////////////////////////////
// LEAD HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadHistoryOptionalDefaultsSchema = LeadHistorySchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type LeadHistoryOptionalDefaults = z.infer<typeof LeadHistoryOptionalDefaultsSchema>

export default LeadHistorySchema
