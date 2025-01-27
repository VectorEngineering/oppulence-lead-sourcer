import { z } from 'zod';

/////////////////////////////////////////
// LEAD PERSONAL DETAILS SCHEMA
/////////////////////////////////////////

export const LeadPersonalDetailsSchema = z.object({
  id: z.string().cuid(),
  leadId: z.string(),
  firstName: z.string().nullish(),
  lastName: z.string().nullish(),
  title: z.string().nullish(),
  department: z.string().nullish(),
  email: z.string().nullish(),
  phoneWork: z.string().nullish(),
  phoneMobile: z.string().nullish(),
  role: z.string().nullish(),
  jobLevel: z.string().nullish(),
  yearsInRole: z.number().int().nullish(),
  yearsInCompany: z.number().int().nullish(),
  birthday: z.coerce.date().nullish(),
  gender: z.string().nullish(),
  languages: z.string().nullish(),
  addressLine1: z.string().nullish(),
  addressLine2: z.string().nullish(),
  city: z.string().nullish(),
  state: z.string().nullish(),
  postalCode: z.string().nullish(),
  country: z.string().nullish(),
  communicationPreference: z.string().nullish(),
  timeZone: z.string().nullish(),
  education: z.string().nullish(),
  certifications: z.string().nullish(),
  skills: z.string().nullish(),
  decisionMaker: z.boolean(),
  budgetAuthority: z.boolean(),
  influenceLevel: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type LeadPersonalDetails = z.infer<typeof LeadPersonalDetailsSchema>

/////////////////////////////////////////
// LEAD PERSONAL DETAILS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadPersonalDetailsOptionalDefaultsSchema = LeadPersonalDetailsSchema.merge(z.object({
  id: z.string().cuid().optional(),
  decisionMaker: z.boolean().optional(),
  budgetAuthority: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type LeadPersonalDetailsOptionalDefaults = z.infer<typeof LeadPersonalDetailsOptionalDefaultsSchema>

export default LeadPersonalDetailsSchema;
