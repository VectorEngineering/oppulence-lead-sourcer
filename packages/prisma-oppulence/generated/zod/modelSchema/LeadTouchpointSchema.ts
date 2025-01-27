import { z } from 'zod';

/////////////////////////////////////////
// LEAD TOUCHPOINT SCHEMA
/////////////////////////////////////////

export const LeadTouchpointSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  channel: z.string(),
  campaign: z.string().nullish(),
  content: z.string().nullish(),
  interaction: z.string().nullish(),
  timestamp: z.coerce.date(),
  isFirstTouch: z.boolean(),
  isLastTouch: z.boolean(),
})

export type LeadTouchpoint = z.infer<typeof LeadTouchpointSchema>

/////////////////////////////////////////
// LEAD TOUCHPOINT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadTouchpointOptionalDefaultsSchema = LeadTouchpointSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type LeadTouchpointOptionalDefaults = z.infer<typeof LeadTouchpointOptionalDefaultsSchema>

export default LeadTouchpointSchema;
