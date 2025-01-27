import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SortOrderSchema } from './SortOrderSchema'
import { SortOrderInputSchema } from './SortOrderInputSchema'
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema'
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema'
import { ReportFilterOrderByRelationAggregateInputSchema } from './ReportFilterOrderByRelationAggregateInputSchema'
import { ReportSortingOrderByRelationAggregateInputSchema } from './ReportSortingOrderByRelationAggregateInputSchema'
import { ReportColumnOrderByRelationAggregateInputSchema } from './ReportColumnOrderByRelationAggregateInputSchema'
import { ReportScheduleOrderByRelationAggregateInputSchema } from './ReportScheduleOrderByRelationAggregateInputSchema'
import { ReportRecipientOrderByRelationAggregateInputSchema } from './ReportRecipientOrderByRelationAggregateInputSchema'
import { ReportAccessOrderByRelationAggregateInputSchema } from './ReportAccessOrderByRelationAggregateInputSchema'
import { ReportOrderByRelevanceInputSchema } from './ReportOrderByRelevanceInputSchema'

export const ReportOrderByWithRelationInputSchema: z.ZodType<Prisma.ReportOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        type: z.lazy(() => SortOrderSchema).optional(),
        format: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        from: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        to: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        timeZone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        fileUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        fileSize: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        pageCount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        rowCount: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        currency: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        language: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        template: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        watermark: z.lazy(() => SortOrderSchema).optional(),
        isScheduled: z.lazy(() => SortOrderSchema).optional(),
        visibility: z.lazy(() => SortOrderSchema).optional(),
        password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        shareUrl: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        shortLink: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        downloadCount: z.lazy(() => SortOrderSchema).optional(),
        viewCount: z.lazy(() => SortOrderSchema).optional(),
        processingTime: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastError: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        retryCount: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        expireAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        lastAccessedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        scheduledAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        completedAt: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        createdBy: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        projectId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
        creator: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
        project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional(),
        filters: z.lazy(() => ReportFilterOrderByRelationAggregateInputSchema).optional(),
        sortings: z.lazy(() => ReportSortingOrderByRelationAggregateInputSchema).optional(),
        columns: z.lazy(() => ReportColumnOrderByRelationAggregateInputSchema).optional(),
        schedules: z.lazy(() => ReportScheduleOrderByRelationAggregateInputSchema).optional(),
        recipients: z.lazy(() => ReportRecipientOrderByRelationAggregateInputSchema).optional(),
        accessUsers: z.lazy(() => ReportAccessOrderByRelationAggregateInputSchema).optional(),
        _relevance: z.lazy(() => ReportOrderByRelevanceInputSchema).optional()
    })
    .strict()

export default ReportOrderByWithRelationInputSchema
