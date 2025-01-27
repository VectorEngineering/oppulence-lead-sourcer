import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { NurtureStatusSchema } from '../inputTypeSchemas/NurtureStatusSchema'

/////////////////////////////////////////
// LEAD NURTURING SCHEMA
/////////////////////////////////////////

export const LeadNurturingSchema = z.object({
    status: NurtureStatusSchema,
    id: z.string().cuid(),
    leadId: z.string(),
    program: z.string(),
    stage: z.string(),
    contentViewed: JsonValueSchema.nullable(),
    emailsOpened: JsonValueSchema.nullable(),
    websiteVisits: JsonValueSchema.nullable(),
    engagementScore: z.number(),
    responseRate: z.number(),
    lastEngagement: z.coerce.date().nullish(),
    currentStep: z.number().int(),
    completedSteps: JsonValueSchema.nullable(),
    nextActions: JsonValueSchema.nullable(),
    automationFlows: JsonValueSchema.nullable(),
    triggers: JsonValueSchema.nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadNurturing = z.infer<typeof LeadNurturingSchema>

/////////////////////////////////////////
// LEAD NURTURING OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadNurturingOptionalDefaultsSchema = LeadNurturingSchema.merge(
    z.object({
        status: NurtureStatusSchema.optional(),
        id: z.string().cuid().optional(),
        engagementScore: z.number().optional(),
        responseRate: z.number().optional(),
        currentStep: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadNurturingOptionalDefaults = z.infer<typeof LeadNurturingOptionalDefaultsSchema>

export default LeadNurturingSchema
