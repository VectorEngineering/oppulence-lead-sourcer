import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompanyDetailsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompanyDetailsMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        companyName: z.lazy(() => SortOrderSchema).optional(),
        industry: z.lazy(() => SortOrderSchema).optional(),
        registrationNumber: z.lazy(() => SortOrderSchema).optional(),
        vatNumber: z.lazy(() => SortOrderSchema).optional(),
        annualRevenue: z.lazy(() => SortOrderSchema).optional(),
        employeeCount: z.lazy(() => SortOrderSchema).optional(),
        foundedYear: z.lazy(() => SortOrderSchema).optional(),
        website: z.lazy(() => SortOrderSchema).optional(),
        linkedinUrl: z.lazy(() => SortOrderSchema).optional(),
        addressLine1: z.lazy(() => SortOrderSchema).optional(),
        addressLine2: z.lazy(() => SortOrderSchema).optional(),
        city: z.lazy(() => SortOrderSchema).optional(),
        state: z.lazy(() => SortOrderSchema).optional(),
        postalCode: z.lazy(() => SortOrderSchema).optional(),
        country: z.lazy(() => SortOrderSchema).optional(),
        businessType: z.lazy(() => SortOrderSchema).optional(),
        stockSymbol: z.lazy(() => SortOrderSchema).optional(),
        parentCompany: z.lazy(() => SortOrderSchema).optional(),
        subsidiaries: z.lazy(() => SortOrderSchema).optional(),
        marketSegment: z.lazy(() => SortOrderSchema).optional(),
        competitors: z.lazy(() => SortOrderSchema).optional(),
        keyProducts: z.lazy(() => SortOrderSchema).optional(),
        fiscalYearEnd: z.lazy(() => SortOrderSchema).optional(),
        creditRating: z.lazy(() => SortOrderSchema).optional(),
        paymentTerms: z.lazy(() => SortOrderSchema).optional(),
        certifications: z.lazy(() => SortOrderSchema).optional(),
        complianceStatus: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadCompanyDetailsMaxOrderByAggregateInputSchema
