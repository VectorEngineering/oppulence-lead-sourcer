import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'

export const ReportMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReportMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.lazy(() => SortOrderSchema).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        format: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        from: z.lazy(() => SortOrderSchema).optional(),
        to: z.lazy(() => SortOrderSchema).optional(),
        timeZone: z.lazy(() => SortOrderSchema).optional(),
        fileUrl: z.lazy(() => SortOrderSchema).optional(),
        fileSize: z.lazy(() => SortOrderSchema).optional(),
        pageCount: z.lazy(() => SortOrderSchema).optional(),
        rowCount: z.lazy(() => SortOrderSchema).optional(),
        currency: z.lazy(() => SortOrderSchema).optional(),
        language: z.lazy(() => SortOrderSchema).optional(),
        template: z.lazy(() => SortOrderSchema).optional(),
        watermark: z.lazy(() => SortOrderSchema).optional(),
        isScheduled: z.lazy(() => SortOrderSchema).optional(),
        visibility: z.lazy(() => SortOrderSchema).optional(),
        password: z.lazy(() => SortOrderSchema).optional(),
        shareUrl: z.lazy(() => SortOrderSchema).optional(),
        shortLink: z.lazy(() => SortOrderSchema).optional(),
        downloadCount: z.lazy(() => SortOrderSchema).optional(),
        viewCount: z.lazy(() => SortOrderSchema).optional(),
        processingTime: z.lazy(() => SortOrderSchema).optional(),
        lastError: z.lazy(() => SortOrderSchema).optional(),
        retryCount: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        expireAt: z.lazy(() => SortOrderSchema).optional(),
        lastAccessedAt: z.lazy(() => SortOrderSchema).optional(),
        scheduledAt: z.lazy(() => SortOrderSchema).optional(),
        completedAt: z.lazy(() => SortOrderSchema).optional(),
        createdBy: z.lazy(() => SortOrderSchema).optional(),
        projectId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export default ReportMaxOrderByAggregateInputSchema
