import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const LeadExternalSystemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LeadExternalSystemMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        leadId: z.lazy(() => SortOrderSchema).optional(),
        provider: z.lazy(() => SortOrderSchema).optional(),
        externalId: z.lazy(() => SortOrderSchema).optional(),
        lastSynced: z.lazy(() => SortOrderSchema).optional(),
        syncStatus: z.lazy(() => SortOrderSchema).optional(),
        errorMessage: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default LeadExternalSystemMaxOrderByAggregateInputSchema
