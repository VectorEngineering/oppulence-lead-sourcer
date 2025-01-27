import { z } from 'zod';

/////////////////////////////////////////
// LEAD SCORE HISTORY SCHEMA
/////////////////////////////////////////

export const LeadScoreHistorySchema = z.object({
  id: z.string().cuid(),
  leadScoreId: z.string(),
  previousScore: z.number(),
  newScore: z.number(),
  changeReason: z.string().nullish(),
  timestamp: z.coerce.date(),
})

export type LeadScoreHistory = z.infer<typeof LeadScoreHistorySchema>

/////////////////////////////////////////
// LEAD SCORE HISTORY OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadScoreHistoryOptionalDefaultsSchema = LeadScoreHistorySchema.merge(z.object({
  id: z.string().cuid().optional(),
  timestamp: z.coerce.date().optional(),
}))

export type LeadScoreHistoryOptionalDefaults = z.infer<typeof LeadScoreHistoryOptionalDefaultsSchema>

export default LeadScoreHistorySchema;
