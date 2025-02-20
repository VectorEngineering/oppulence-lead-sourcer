import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema'
import { ReportRecipientOrderByRelevanceInputSchema } from './ReportRecipientOrderByRelevanceInputSchema'

export const ReportRecipientOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportRecipientOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => ReportRecipientOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ReportRecipientOrderByWithRelationInputSchema
