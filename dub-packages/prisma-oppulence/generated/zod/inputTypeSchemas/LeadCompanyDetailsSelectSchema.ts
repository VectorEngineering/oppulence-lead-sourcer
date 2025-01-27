import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadArgsSchema } from "../outputTypeSchemas/LeadArgsSchema"

export const LeadCompanyDetailsSelectSchema: z.ZodType<Prisma.LeadCompanyDetailsSelect> = z.object({
  id: z.boolean().optional(),
  leadId: z.boolean().optional(),
  companyName: z.boolean().optional(),
  industry: z.boolean().optional(),
  registrationNumber: z.boolean().optional(),
  vatNumber: z.boolean().optional(),
  annualRevenue: z.boolean().optional(),
  employeeCount: z.boolean().optional(),
  foundedYear: z.boolean().optional(),
  website: z.boolean().optional(),
  linkedinUrl: z.boolean().optional(),
  addressLine1: z.boolean().optional(),
  addressLine2: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  businessType: z.boolean().optional(),
  stockSymbol: z.boolean().optional(),
  parentCompany: z.boolean().optional(),
  subsidiaries: z.boolean().optional(),
  marketSegment: z.boolean().optional(),
  competitors: z.boolean().optional(),
  keyProducts: z.boolean().optional(),
  fiscalYearEnd: z.boolean().optional(),
  creditRating: z.boolean().optional(),
  paymentTerms: z.boolean().optional(),
  certifications: z.boolean().optional(),
  complianceStatus: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lead: z.union([z.boolean(),z.lazy(() => LeadArgsSchema)]).optional(),
}).strict()

export default LeadCompanyDetailsSelectSchema;
