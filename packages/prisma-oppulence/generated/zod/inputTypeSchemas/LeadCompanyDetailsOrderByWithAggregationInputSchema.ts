import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadCompanyDetailsCountOrderByAggregateInputSchema } from './LeadCompanyDetailsCountOrderByAggregateInputSchema'
import { LeadCompanyDetailsAvgOrderByAggregateInputSchema } from './LeadCompanyDetailsAvgOrderByAggregateInputSchema'
import { LeadCompanyDetailsMaxOrderByAggregateInputSchema } from './LeadCompanyDetailsMaxOrderByAggregateInputSchema'
import { LeadCompanyDetailsMinOrderByAggregateInputSchema } from './LeadCompanyDetailsMinOrderByAggregateInputSchema'
import { LeadCompanyDetailsSumOrderByAggregateInputSchema } from './LeadCompanyDetailsSumOrderByAggregateInputSchema'

export const LeadCompanyDetailsOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadCompanyDetailsOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        companyName: z.lazy(() => SortOrderSchema).optional(),
        industry: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        registrationNumber: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        vatNumber: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        annualRevenue: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        employeeCount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        foundedYear: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        website: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        linkedinUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        addressLine1: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        addressLine2: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        city: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        state: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        postalCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        country: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        businessType: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        stockSymbol: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        parentCompany: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        subsidiaries: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        marketSegment: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        competitors: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        keyProducts: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        fiscalYearEnd: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        creditRating: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        paymentTerms: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        certifications: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        complianceStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadCompanyDetailsCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadCompanyDetailsAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadCompanyDetailsMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadCompanyDetailsMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadCompanyDetailsSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadCompanyDetailsOrderByWithAggregationInputSchema
