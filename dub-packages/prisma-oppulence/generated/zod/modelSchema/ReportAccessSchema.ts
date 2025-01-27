import { z } from 'zod';

/////////////////////////////////////////
// REPORT ACCESS SCHEMA
/////////////////////////////////////////

export const ReportAccessSchema = z.object({
  id: z.string().cuid(),
  reportId: z.string(),
  userId: z.string(),
  accessType: z.string(),
})

export type ReportAccess = z.infer<typeof ReportAccessSchema>

/////////////////////////////////////////
// REPORT ACCESS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportAccessOptionalDefaultsSchema = ReportAccessSchema.merge(z.object({
  id: z.string().cuid().optional(),
}))

export type ReportAccessOptionalDefaults = z.infer<typeof ReportAccessOptionalDefaultsSchema>

export default ReportAccessSchema;
