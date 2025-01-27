import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const CustomerSumOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerSumOrderByAggregateInput> = z
    .object({
        creditLimit: z.lazy(() => SortOrderSchema).optional(),
        customerRating: z.lazy(() => SortOrderSchema).optional(),
        latePaymentPenalty: z.lazy(() => SortOrderSchema).optional(),
        creditScore: z.lazy(() => SortOrderSchema).optional(),
        withholdingTaxRate: z.lazy(() => SortOrderSchema).optional(),
        availableCredit: z.lazy(() => SortOrderSchema).optional(),
        insuranceCoverage: z.lazy(() => SortOrderSchema).optional(),
        earlyPaymentDiscount: z.lazy(() => SortOrderSchema).optional(),
        minimumOrderValue: z.lazy(() => SortOrderSchema).optional(),
        maximumOrderValue: z.lazy(() => SortOrderSchema).optional(),
        averagePaymentDays: z.lazy(() => SortOrderSchema).optional(),
        loyaltyPoints: z.lazy(() => SortOrderSchema).optional(),
        lifetimeValue: z.lazy(() => SortOrderSchema).optional(),
        acquisitionCost: z.lazy(() => SortOrderSchema).optional(),
        retentionRate: z.lazy(() => SortOrderSchema).optional(),
        satisfactionScore: z.lazy(() => SortOrderSchema).optional(),
        totalOrders: z.lazy(() => SortOrderSchema).optional(),
        totalReturns: z.lazy(() => SortOrderSchema).optional(),
        activeSubscriptions: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default CustomerSumOrderByAggregateInputSchema
