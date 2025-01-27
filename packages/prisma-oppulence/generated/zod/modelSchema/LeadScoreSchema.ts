import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { LeadScoringMethodSchema } from '../inputTypeSchemas/LeadScoringMethodSchema'

/////////////////////////////////////////
// LEAD SCORE SCHEMA
/////////////////////////////////////////

export const LeadScoreSchema = z.object({
  scoringMethod: LeadScoringMethodSchema,
  id: z.string().cuid(),
  leadId: z.string(),
  websiteVisits: z.number().int(),
  emailEngagement: z.number(),
  socialEngagement: z.number(),
  contentDownloads: z.number().int(),
  companySizeScore: z.number(),
  industryScore: z.number(),
  budgetScore: z.number(),
  technicalFitScore: z.number(),
  meetingAttendance: z.number(),
  responseTime: z.number(),
  interactionQuality: z.number(),
  behavioralWeight: z.number(),
  demographicWeight: z.number(),
  engagementWeight: z.number(),
  totalScore: z.number(),
  lastCalculated: z.coerce.date(),
  nextRecalculation: z.coerce.date().nullish(),
  mlFeatures: JsonValueSchema.nullable(),
  confidenceScore: z.number().nullish(),
})

export type LeadScore = z.infer<typeof LeadScoreSchema>

/////////////////////////////////////////
// LEAD SCORE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadScoreOptionalDefaultsSchema = LeadScoreSchema.merge(z.object({
  scoringMethod: LeadScoringMethodSchema.optional(),
  id: z.string().cuid().optional(),
  websiteVisits: z.number().int().optional(),
  emailEngagement: z.number().optional(),
  socialEngagement: z.number().optional(),
  contentDownloads: z.number().int().optional(),
  companySizeScore: z.number().optional(),
  industryScore: z.number().optional(),
  budgetScore: z.number().optional(),
  technicalFitScore: z.number().optional(),
  meetingAttendance: z.number().optional(),
  responseTime: z.number().optional(),
  interactionQuality: z.number().optional(),
  behavioralWeight: z.number().optional(),
  demographicWeight: z.number().optional(),
  engagementWeight: z.number().optional(),
  totalScore: z.number().optional(),
  lastCalculated: z.coerce.date().optional(),
}))

export type LeadScoreOptionalDefaults = z.infer<typeof LeadScoreOptionalDefaultsSchema>

export default LeadScoreSchema;
