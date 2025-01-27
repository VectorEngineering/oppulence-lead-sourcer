import { z } from 'zod'

/////////////////////////////////////////
// LEAD COMMUNICATION SCHEMA
/////////////////////////////////////////

export const LeadCommunicationSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    type: z.string(),
    direction: z.string(),
    subject: z.string().nullish(),
    content: z.string(),
    outcome: z.string().nullish(),
    duration: z.number().int().nullish(),
    scheduledAt: z.coerce.date().nullish(),
    completedAt: z.coerce.date().nullish(),
    createdAt: z.coerce.date()
})

export type LeadCommunication = z.infer<typeof LeadCommunicationSchema>

/////////////////////////////////////////
// LEAD COMMUNICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCommunicationOptionalDefaultsSchema = LeadCommunicationSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional()
    })
)

export type LeadCommunicationOptionalDefaults = z.infer<typeof LeadCommunicationOptionalDefaultsSchema>

export default LeadCommunicationSchema
