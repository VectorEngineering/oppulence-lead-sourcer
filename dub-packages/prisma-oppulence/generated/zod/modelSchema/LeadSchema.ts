import { z } from 'zod';
import { LeadSourceSchema } from '../inputTypeSchemas/LeadSourceSchema'
import { LeadStageSchema } from '../inputTypeSchemas/LeadStageSchema'
import { LeadVerificationStatusSchema } from '../inputTypeSchemas/LeadVerificationStatusSchema'
import { LeadPrioritySchema } from '../inputTypeSchemas/LeadPrioritySchema'
import { LeadCategoryTagSchema } from '../inputTypeSchemas/LeadCategoryTagSchema'

/////////////////////////////////////////
// LEAD SCHEMA
/////////////////////////////////////////

export const LeadSchema = z.object({
  leadSource: LeadSourceSchema,
  stage: LeadStageSchema,
  verificationStatus: LeadVerificationStatusSchema,
  priority: LeadPrioritySchema,
  categoryTag: LeadCategoryTagSchema.nullish(),
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullish(),
  note: z.string().nullish(),
  internalNotes: z.string().nullish(),
  reference: z.string().nullish(),
  amount: z.number(),
  probability: z.number().nullish(),
  weightedAmount: z.number().nullish(),
  actualAmount: z.number().nullish(),
  closeDate: z.coerce.date().nullish(),
  nextFollowUp: z.coerce.date().nullish(),
  lastContactDate: z.coerce.date().nullish(),
  contactName: z.string().nullish(),
  contactEmail: z.string().nullish(),
  contactPhone: z.string().nullish(),
  contactTitle: z.string().nullish(),
  company: z.string().nullish(),
  industry: z.string().nullish(),
  pipelineStage: z.string().nullish(),
  salesRep: z.string().nullish(),
  territory: z.string().nullish(),
  winReason: z.string().nullish(),
  lossReason: z.string().nullish(),
  date: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  archivedAt: z.coerce.date().nullish(),
  convertedAt: z.coerce.date().nullish(),
  qualifiedAt: z.coerce.date().nullish(),
  closedAt: z.coerce.date().nullish(),
  lastActivity: z.string().nullish(),
  nextAction: z.string().nullish(),
  followUpStatus: z.string().nullish(),
  engagementScore: z.number().nullish(),
  assignedId: z.string().nullish(),
  createdBy: z.string().nullish(),
  updatedBy: z.string().nullish(),
  projectId: z.string(),
  dataConsent: z.boolean(),
  dataRetention: z.coerce.date().nullish(),
  externalId: z.string().nullish(),
  syncStatus: z.string().nullish(),
  lastSyncedAt: z.coerce.date().nullish(),
})

export type Lead = z.infer<typeof LeadSchema>

/////////////////////////////////////////
// LEAD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadOptionalDefaultsSchema = LeadSchema.merge(z.object({
  leadSource: LeadSourceSchema.optional(),
  stage: LeadStageSchema.optional(),
  verificationStatus: LeadVerificationStatusSchema.optional(),
  priority: LeadPrioritySchema.optional(),
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  dataConsent: z.boolean().optional(),
}))

export type LeadOptionalDefaults = z.infer<typeof LeadOptionalDefaultsSchema>

export default LeadSchema;
