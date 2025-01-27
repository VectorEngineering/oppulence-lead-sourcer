import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCompanyDetailsWhereInputSchema } from './LeadCompanyDetailsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { FloatNullableFilterSchema } from './FloatNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LeadRelationFilterSchema } from './LeadRelationFilterSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadCompanyDetailsWhereUniqueInputSchema: z.ZodType<Prisma.LeadCompanyDetailsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    leadId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    leadId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  leadId: z.string().optional(),
  AND: z.union([ z.lazy(() => LeadCompanyDetailsWhereInputSchema),z.lazy(() => LeadCompanyDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LeadCompanyDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LeadCompanyDetailsWhereInputSchema),z.lazy(() => LeadCompanyDetailsWhereInputSchema).array() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  industry: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  registrationNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  vatNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  annualRevenue: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  employeeCount: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  foundedYear: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  website: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  linkedinUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressLine1: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressLine2: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  city: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  businessType: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  stockSymbol: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  parentCompany: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subsidiaries: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  marketSegment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  competitors: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  keyProducts: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  fiscalYearEnd: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  creditRating: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paymentTerms: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  certifications: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  complianceStatus: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lead: z.union([ z.lazy(() => LeadRelationFilterSchema),z.lazy(() => LeadWhereInputSchema) ]).optional(),
}).strict());

export default LeadCompanyDetailsWhereUniqueInputSchema;
