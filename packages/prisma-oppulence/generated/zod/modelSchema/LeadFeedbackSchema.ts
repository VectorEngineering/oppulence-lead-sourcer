import { z } from 'zod'
import { FeedbackTypeSchema } from '../inputTypeSchemas/FeedbackTypeSchema'
import { FeedbackStatusSchema } from '../inputTypeSchemas/FeedbackStatusSchema'

/////////////////////////////////////////
// LEAD FEEDBACK SCHEMA
/////////////////////////////////////////

export const LeadFeedbackSchema = z.object({
    type: FeedbackTypeSchema,
    status: FeedbackStatusSchema,
    id: z.string().cuid(),
    leadId: z.string(),
    source: z.string(),
    content: z.string(),
    sentiment: z.string(),
    score: z.number().nullish(),
    category: z.string(),
    subCategory: z.string().nullish(),
    tags: z.string().nullish(),
    requiresFollowUp: z.boolean(),
    followUpAssignee: z.string().nullish(),
    followUpStatus: z.string().nullish(),
    followUpNotes: z.string().nullish(),
    resolution: z.string().nullish(),
    resolvedBy: z.string().nullish(),
    resolvedAt: z.coerce.date().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadFeedback = z.infer<typeof LeadFeedbackSchema>

/////////////////////////////////////////
// LEAD FEEDBACK OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadFeedbackOptionalDefaultsSchema = LeadFeedbackSchema.merge(
    z.object({
        status: FeedbackStatusSchema.optional(),
        id: z.string().cuid().optional(),
        requiresFollowUp: z.boolean().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadFeedbackOptionalDefaults = z.infer<typeof LeadFeedbackOptionalDefaultsSchema>

export default LeadFeedbackSchema
