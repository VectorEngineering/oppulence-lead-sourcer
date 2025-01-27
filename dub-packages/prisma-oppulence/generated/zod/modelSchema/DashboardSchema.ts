import { z } from 'zod';

/////////////////////////////////////////
// DASHBOARD SCHEMA
/////////////////////////////////////////

export const DashboardSchema = z.object({
  id: z.string().cuid(),
  linkId: z.string().nullish(),
  projectId: z.string().nullish(),
  userId: z.string().nullish(),
  doIndex: z.boolean(),
  password: z.string().nullish(),
  showConversions: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Dashboard = z.infer<typeof DashboardSchema>

/////////////////////////////////////////
// DASHBOARD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DashboardOptionalDefaultsSchema = DashboardSchema.merge(z.object({
  id: z.string().cuid().optional(),
  doIndex: z.boolean().optional(),
  showConversions: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type DashboardOptionalDefaults = z.infer<typeof DashboardOptionalDefaultsSchema>

export default DashboardSchema;
