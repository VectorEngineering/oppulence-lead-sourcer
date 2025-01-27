import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { LeadPersonalDetailsCountOrderByAggregateInputSchema } from './LeadPersonalDetailsCountOrderByAggregateInputSchema'
import { LeadPersonalDetailsAvgOrderByAggregateInputSchema } from './LeadPersonalDetailsAvgOrderByAggregateInputSchema'
import { LeadPersonalDetailsMaxOrderByAggregateInputSchema } from './LeadPersonalDetailsMaxOrderByAggregateInputSchema'
import { LeadPersonalDetailsMinOrderByAggregateInputSchema } from './LeadPersonalDetailsMinOrderByAggregateInputSchema'
import { LeadPersonalDetailsSumOrderByAggregateInputSchema } from './LeadPersonalDetailsSumOrderByAggregateInputSchema'

export const LeadPersonalDetailsOrderByWithAggregationInputSchema: z.ZodType<Prisma.LeadPersonalDetailsOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        firstName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        department: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        email: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        phoneWork: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        phoneMobile: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        role: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        jobLevel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        yearsInRole: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        yearsInCompany: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        birthday: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        gender: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        languages: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        addressLine1: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        addressLine2: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        city: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        state: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        postalCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        country: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        communicationPreference: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timeZone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        education: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        certifications: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        skills: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        decisionMaker: z.lazy(() => SortOrderSchema).optional(),
        budgetAuthority: z.lazy(() => SortOrderSchema).optional(),
        influenceLevel: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LeadPersonalDetailsCountOrderByAggregateInputSchema).optional(),
        _avg: z.lazy(() => LeadPersonalDetailsAvgOrderByAggregateInputSchema).optional(),
        _max: z.lazy(() => LeadPersonalDetailsMaxOrderByAggregateInputSchema).optional(),
        _min: z.lazy(() => LeadPersonalDetailsMinOrderByAggregateInputSchema).optional(),
        _sum: z.lazy(() => LeadPersonalDetailsSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export default LeadPersonalDetailsOrderByWithAggregationInputSchema
