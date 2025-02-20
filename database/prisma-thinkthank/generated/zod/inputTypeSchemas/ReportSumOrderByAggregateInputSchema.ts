import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReportSumOrderByAggregateInput> = z
    .object({
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        pageCount: z.lazy(() => SortOrderSchema).optional(),
        rowCount: z.lazy(() => SortOrderSchema).optional(),
        downloadCount: z.lazy(() => SortOrderSchema).optional(),
        viewCount: z.lazy(() => SortOrderSchema).optional(),
        processingTime: z.lazy(() => SortOrderSchema).optional(),
        retryCount: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportSumOrderByAggregateInputSchema
