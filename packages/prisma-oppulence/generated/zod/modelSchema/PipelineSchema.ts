import { z } from 'zod';
import { PipelineTypeSchema } from '../inputTypeSchemas/PipelineTypeSchema'

/////////////////////////////////////////
// PIPELINE SCHEMA
/////////////////////////////////////////

export const PipelineSchema = z.object({
  type: PipelineTypeSchema,
  id: z.string().cuid(),
  name: z.string(),
  slug: z.string().nullish(),
  description: z.string().nullish(),
  isActive: z.boolean(),
  isDefault: z.boolean(),
  icon: z.string().nullish(),
  color: z.string(),
  currency: z.string(),
  defaultStageId: z.string().nullish(),
  pipelineFocus: z.string().nullish(),
  pipelineSegment: z.string().nullish(),
  pipelineCategory: z.string().nullish(),
  pipelineGoal: z.number().nullish(),
  typicalSalesCycle: z.number().int().nullish(),
  averageDealSize: z.number().nullish(),
  averageCloseRate: z.number().nullish(),
  minimumDealSize: z.number().nullish(),
  maximumDealSize: z.number().nullish(),
  targetMarket: z.string().nullish(),
  salesMethodology: z.string().nullish(),
  qualificationCriteria: z.string().nullish(),
  forecastingMethod: z.string().nullish(),
  confidenceScore: z.number().nullish(),
  revenueTarget: z.number().nullish(),
  dealCountTarget: z.number().int().nullish(),
  complianceLevel: z.string().nullish(),
  securityTier: z.string().nullish(),
  dataRetention: z.number().int().nullish(),
  visibilityLevel: z.string().nullish(),
  projectId: z.string(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  archivedAt: z.coerce.date().nullish(),
})

export type Pipeline = z.infer<typeof PipelineSchema>

/////////////////////////////////////////
// PIPELINE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineOptionalDefaultsSchema = PipelineSchema.merge(z.object({
  type: PipelineTypeSchema.optional(),
  id: z.string().cuid().optional(),
  isActive: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  color: z.string().optional(),
  currency: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type PipelineOptionalDefaults = z.infer<typeof PipelineOptionalDefaultsSchema>

export default PipelineSchema;
