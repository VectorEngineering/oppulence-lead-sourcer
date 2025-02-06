import { z } from 'zod';

/////////////////////////////////////////
// REPORT RECIPIENT SCHEMA
/////////////////////////////////////////

export const ReportRecipientSchema = z.object({
  id: z.string().cuid(),
  reportId: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  type: z.string(),
  isActive: z.boolean(),
})

export type ReportRecipient = z.infer<typeof ReportRecipientSchema>

/////////////////////////////////////////
// REPORT RECIPIENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportRecipientOptionalDefaultsSchema = ReportRecipientSchema.merge(z.object({
  id: z.string().cuid().optional(),
  isActive: z.boolean().optional(),
}))

export type ReportRecipientOptionalDefaults = z.infer<typeof ReportRecipientOptionalDefaultsSchema>

export default ReportRecipientSchema;
