import { z } from 'zod'
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD PRODUCT FIT SCHEMA
/////////////////////////////////////////

export const LeadProductFitSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    technicalFit: z.number(),
    businessFit: z.number(),
    culturalFit: z.number(),
    budgetFit: z.number(),
    overallFit: z.number(),
    strengthsWeaknesses: JsonValueSchema,
    customizationNeeds: JsonValueSchema,
    implementationComplexity: z.string(),
    requiredFeatures: JsonValueSchema,
    optionalFeatures: JsonValueSchema,
    dealBreakers: JsonValueSchema,
    integrationComplexity: z.string(),
    integrationRisks: JsonValueSchema,
    integrationCosts: z.number().nullish(),
    implementationTimeline: JsonValueSchema,
    trainingNeeds: JsonValueSchema,
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadProductFit = z.infer<typeof LeadProductFitSchema>

/////////////////////////////////////////
// LEAD PRODUCT FIT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadProductFitOptionalDefaultsSchema = LeadProductFitSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadProductFitOptionalDefaults = z.infer<typeof LeadProductFitOptionalDefaultsSchema>

export default LeadProductFitSchema
