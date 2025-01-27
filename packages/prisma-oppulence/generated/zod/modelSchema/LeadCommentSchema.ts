import { z } from 'zod';

/////////////////////////////////////////
// LEAD COMMENT SCHEMA
/////////////////////////////////////////

export const LeadCommentSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  content: z.string(),
  type: z.string().nullish(),
  visibility: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  createdBy: z.string().nullish(),
})

export type LeadComment = z.infer<typeof LeadCommentSchema>

/////////////////////////////////////////
// LEAD COMMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCommentOptionalDefaultsSchema = LeadCommentSchema.merge(z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadCommentOptionalDefaults = z.infer<typeof LeadCommentOptionalDefaultsSchema>

export default LeadCommentSchema;
