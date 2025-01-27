import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD SEGMENTATION SCHEMA
/////////////////////////////////////////

export const LeadSegmentationSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  industrySegment: z.string(),
  companySize: z.string(),
  geographicRegion: z.string(),
  purchaseHistory: JsonValueSchema.nullable(),
  productUsage: JsonValueSchema.nullable(),
  engagementLevel: z.string(),
  decisionMaking: z.string(),
  innovationLevel: z.string(),
  riskTolerance: z.string(),
  customerLifetimeValue: z.number().nullish(),
  profitabilitySegment: z.string(),
  growthPotential: z.string(),
  segmentTags: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadSegmentation = z.infer<typeof LeadSegmentationSchema>

/////////////////////////////////////////
// LEAD SEGMENTATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadSegmentationOptionalDefaultsSchema = LeadSegmentationSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadSegmentationOptionalDefaults = z.infer<typeof LeadSegmentationOptionalDefaultsSchema>

export default LeadSegmentationSchema;
