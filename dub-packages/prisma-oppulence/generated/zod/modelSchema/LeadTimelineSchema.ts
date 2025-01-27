import { z } from 'zod';

/////////////////////////////////////////
// LEAD TIMELINE SCHEMA
/////////////////////////////////////////

export const LeadTimelineSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  milestone: z.string(),
  targetDate: z.coerce.date(),
  actualDate: z.coerce.date().nullish(),
  status: z.string(),
  notes: z.string().nullish(),
})

export type LeadTimeline = z.infer<typeof LeadTimelineSchema>

/////////////////////////////////////////
// LEAD TIMELINE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadTimelineOptionalDefaultsSchema = LeadTimelineSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadTimelineOptionalDefaults = z.infer<typeof LeadTimelineOptionalDefaultsSchema>

export default LeadTimelineSchema;
