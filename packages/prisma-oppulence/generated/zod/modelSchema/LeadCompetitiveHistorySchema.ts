import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// LEAD COMPETITIVE HISTORY SCHEMA
/////////////////////////////////////////

export const LeadCompetitiveHistorySchema = z.object({
  id: z.string().cuid(),
  analysisId: z.string(),
  changes: JsonValueSchema,
  reason: z.string(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
})

export type LeadCompetitiveHistory = z.infer<typeof LeadCompetitiveHistorySchema>

/////////////////////////////////////////
// LEAD COMPETITIVE HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCompetitiveHistoryOptionalDefaultsSchema = LeadCompetitiveHistorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type LeadCompetitiveHistoryOptionalDefaults = z.infer<typeof LeadCompetitiveHistoryOptionalDefaultsSchema>

export default LeadCompetitiveHistorySchema;
