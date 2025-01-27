import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD PRODUCT FIT ASSESSMENT SCHEMA
/////////////////////////////////////////

export const LeadProductFitAssessmentSchema = z.object({
  id: z.string().cuid(),
  productFitId: z.string(),
  assessor: z.string(),
  scores: JsonValueSchema,
  notes: z.string(),
  createdAt: z.coerce.date(),
})

export type LeadProductFitAssessment = z.infer<typeof LeadProductFitAssessmentSchema>

/////////////////////////////////////////
// LEAD PRODUCT FIT ASSESSMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadProductFitAssessmentOptionalDefaultsSchema = LeadProductFitAssessmentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type LeadProductFitAssessmentOptionalDefaults = z.infer<typeof LeadProductFitAssessmentOptionalDefaultsSchema>

export default LeadProductFitAssessmentSchema;
