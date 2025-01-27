import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadCompanyDetailsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.LeadCompanyDetailsAvgOrderByAggregateInput> = z
    .object({
        annualRevenue: z.lazy(() => SortOrderSchema).optional(),
        employeeCount: z.lazy(() => SortOrderSchema).optional(),
        foundedYear: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadCompanyDetailsAvgOrderByAggregateInputSchema
