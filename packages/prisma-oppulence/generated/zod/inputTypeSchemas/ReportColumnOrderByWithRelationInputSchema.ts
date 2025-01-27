import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { ReportOrderByWithRelationInputSchema } from './ReportOrderByWithRelationInputSchema'
import { ReportColumnOrderByRelevanceInputSchema } from './ReportColumnOrderByRelevanceInputSchema'

export const ReportColumnOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportColumnOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        reportId: z.lazy(() => SortOrderSchema).optional(),
        field: z.lazy(() => SortOrderSchema).optional(),
        label: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        width: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        position: z.lazy(() => SortOrderSchema).optional(),
        isVisible: z.lazy(() => SortOrderSchema).optional(),
        format: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        report: z.lazy(() => ReportOrderByWithRelationInputSchema).optional(),
        _relevance: z.lazy(() => ReportColumnOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ReportColumnOrderByWithRelationInputSchema
