import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadPersonalDetailsIncludeSchema } from '../inputTypeSchemas/LeadPersonalDetailsIncludeSchema'
import { LeadPersonalDetailsCreateInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsCreateInputSchema'
import { LeadPersonalDetailsUncheckedCreateInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsUncheckedCreateInputSchema'
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadPersonalDetailsSelectSchema: z.ZodType<Prisma.LeadPersonalDetailsSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  title: z.boolean().optional(),
  department: z.boolean().optional(),
  email: z.boolean().optional(),
  phoneWork: z.boolean().optional(),
  phoneMobile: z.boolean().optional(),
  role: z.boolean().optional(),
  jobLevel: z.boolean().optional(),
  yearsInRole: z.boolean().optional(),
  yearsInCompany: z.boolean().optional(),
  birthday: z.boolean().optional(),
  gender: z.boolean().optional(),
  languages: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  communicationPreference: z.boolean().optional(),
  timeZone: z.boolean().optional(),
  education: z.boolean().optional(),
  certifications: z.boolean().optional(),
  skills: z.boolean().optional(),
  decisionMaker: z.boolean().optional(),
  budgetAuthority: z.boolean().optional(),
  influenceLevel: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export const LeadPersonalDetailsCreateArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsCreateArgs> = z.object({
  select: LeadPersonalDetailsSelectSchema.optional(),
  include: LeadPersonalDetailsIncludeSchema.optional(),
  data: z.union([ LeadPersonalDetailsCreateInputSchema,LeadPersonalDetailsUncheckedCreateInputSchema ]),
}).strict() ;

export default LeadPersonalDetailsCreateArgsSchema;
