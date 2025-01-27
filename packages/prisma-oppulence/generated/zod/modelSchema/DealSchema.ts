import { z } from 'zod';
import { DealStatusSchema } from '../inputTypeSchemas/DealStatusSchema'
import { DealPrioritySchema } from '../inputTypeSchemas/DealPrioritySchema'
import { MarketingChannelSchema } from '../inputTypeSchemas/MarketingChannelSchema'

/////////////////////////////////////////
// DEAL SCHEMA
/////////////////////////////////////////

export const DealSchema = z.object({
  status: DealStatusSchema,
  priority: DealPrioritySchema,
  marketingChannel: MarketingChannelSchema.nullish(),
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullish(),
  pipelineId: z.string(),
  stageId: z.string(),
  leadId: z.string().nullish(),
  value: z.number(),
  currency: z.string(),
  probability: z.number().nullish(),
  expectedRevenue: z.number().nullish(),
  dealCategory: z.string().nullish(),
  dealFocus: z.string().nullish(),
  synergyPotential: z.number().nullish(),
  synergyDescription: z.string().nullish(),
  complianceCheck: z.boolean().nullish(),
  complianceNotes: z.string().nullish(),
  estimatedProfitMargin: z.number().nullish(),
  discountReason: z.string().nullish(),
  closingStrategy: z.string().nullish(),
  leadRating: z.string().nullish(),
  startDate: z.coerce.date().nullish(),
  closeDate: z.coerce.date().nullish(),
  actualCloseDate: z.coerce.date().nullish(),
  progress: z.number().int(),
  reason: z.string().nullish(),
  notes: z.string().nullish(),
  assignedToId: z.string().nullish(),
  projectId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  archivedAt: z.coerce.date().nullish(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
})

export type Deal = z.infer<typeof DealSchema>

/////////////////////////////////////////
// DEAL OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DealOptionalDefaultsSchema = DealSchema.merge(z.object({
  status: DealStatusSchema.optional(),
  priority: DealPrioritySchema.optional(),
  id: z.string().cuid().optional(),
  currency: z.string().optional(),
  progress: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DealOptionalDefaults = z.infer<typeof DealOptionalDefaultsSchema>

export default DealSchema;
