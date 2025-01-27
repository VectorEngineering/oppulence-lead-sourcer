import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD COMPETITIVE ANALYSIS SCHEMA
/////////////////////////////////////////

export const LeadCompetitiveAnalysisSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    competitiveLandscape: JsonValueSchema,
    ourStrengths: JsonValueSchema,
    ourWeaknesses: JsonValueSchema,
    competitors: JsonValueSchema,
    competitorProducts: JsonValueSchema,
    competitorPricing: JsonValueSchema,
    winStrategy: z.string(),
    differentiators: JsonValueSchema,
    responseStrategy: JsonValueSchema,
    competitiveRisks: JsonValueSchema,
    marketThreats: JsonValueSchema,
    mitigationPlans: JsonValueSchema,
    lastUpdated: z.coerce.date(),
    nextReviewDate: z.coerce.date(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadCompetitiveAnalysis = z.infer<typeof LeadCompetitiveAnalysisSchema>

/////////////////////////////////////////
// LEAD COMPETITIVE ANALYSIS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCompetitiveAnalysisOptionalDefaultsSchema = LeadCompetitiveAnalysisSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadCompetitiveAnalysisOptionalDefaults = z.infer<typeof LeadCompetitiveAnalysisOptionalDefaultsSchema>

export default LeadCompetitiveAnalysisSchema
