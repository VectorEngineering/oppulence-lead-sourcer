import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadPersonalDetailsMinOrderByAggregateInputSchema: z.ZodType<Prisma.LeadPersonalDetailsMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        firstName: z.lazy(() => SortOrderSchema).optional(),
        lastName: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        department: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        phoneWork: z.lazy(() => SortOrderSchema).optional(),
        phoneMobile: z.lazy(() => SortOrderSchema).optional(),
        role: z.lazy(() => SortOrderSchema).optional(),
        jobLevel: z.lazy(() => SortOrderSchema).optional(),
        yearsInRole: z.lazy(() => SortOrderSchema).optional(),
        yearsInCompany: z.lazy(() => SortOrderSchema).optional(),
        birthday: z.lazy(() => SortOrderSchema).optional(),
        gender: z.lazy(() => SortOrderSchema).optional(),
        languages: z.lazy(() => SortOrderSchema).optional(),
        addressLine1: z.lazy(() => SortOrderSchema).optional(),
        addressLine2: z.lazy(() => SortOrderSchema).optional(),
        city: z.lazy(() => SortOrderSchema).optional(),
        state: z.lazy(() => SortOrderSchema).optional(),
        postalCode: z.lazy(() => SortOrderSchema).optional(),
        country: z.lazy(() => SortOrderSchema).optional(),
        communicationPreference: z.lazy(() => SortOrderSchema).optional(),
        timeZone: z.lazy(() => SortOrderSchema).optional(),
        education: z.lazy(() => SortOrderSchema).optional(),
        certifications: z.lazy(() => SortOrderSchema).optional(),
        skills: z.lazy(() => SortOrderSchema).optional(),
        decisionMaker: z.lazy(() => SortOrderSchema).optional(),
        budgetAuthority: z.lazy(() => SortOrderSchema).optional(),
        influenceLevel: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadPersonalDetailsMinOrderByAggregateInputSchema
