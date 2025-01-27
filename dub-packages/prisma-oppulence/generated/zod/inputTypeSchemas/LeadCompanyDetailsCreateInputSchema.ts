import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateNestedOneWithoutCompanyDetailsInputSchema } from './LeadCreateNestedOneWithoutCompanyDetailsInputSchema';

export const LeadCompanyDetailsCreateInputSchema: z.ZodType<Prisma.LeadCompanyDetailsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  companyName: z.string(),
  industry: z.string().optional().nullable(),
  registrationNumber: z.string().optional().nullable(),
  vatNumber: z.string().optional().nullable(),
  annualRevenue: z.number().optional().nullable(),
  employeeCount: z.number().int().optional().nullable(),
  foundedYear: z.number().int().optional().nullable(),
  website: z.string().optional().nullable(),
  linkedinUrl: z.string().optional().nullable(),
  addressLine1: z.string().optional().nullable(),
  addressLine2: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  businessType: z.string().optional().nullable(),
  stockSymbol: z.string().optional().nullable(),
  parentCompany: z.string().optional().nullable(),
  subsidiaries: z.string().optional().nullable(),
  marketSegment: z.string().optional().nullable(),
  competitors: z.string().optional().nullable(),
  keyProducts: z.string().optional().nullable(),
  fiscalYearEnd: z.string().optional().nullable(),
  creditRating: z.string().optional().nullable(),
  paymentTerms: z.string().optional().nullable(),
  certifications: z.string().optional().nullable(),
  complianceStatus: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lead: z.lazy(() => LeadCreateNestedOneWithoutCompanyDetailsInputSchema)
}).strict();

export default LeadCompanyDetailsCreateInputSchema;
