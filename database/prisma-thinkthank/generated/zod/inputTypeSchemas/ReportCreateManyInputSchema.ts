import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportTypeSchema } from './ReportTypeSchema'
import { ReportFormatSchema } from './ReportFormatSchema'
import { ReportStatusSchema } from './ReportStatusSchema'

export const ReportCreateManyInputSchema: z.ZodType<Prisma.ReportCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        description: z.string().optional().nullable(),
        type: z.lazy(() => ReportTypeSchema),
        format: z.lazy(() => ReportFormatSchema).optional(),
        status: z.lazy(() => ReportStatusSchema).optional(),
        from: z.coerce.date().optional().nullable(),
        to: z.coerce.date().optional().nullable(),
        timeZone: z.string().optional().nullable(),
        fileUrl: z.string().optional().nullable(),
        fileSize: z.number().int().optional().nullable(),
        pageCount: z.number().int().optional().nullable(),
        rowCount: z.number().int().optional().nullable(),
        currency: z.string().optional().nullable(),
        language: z.string().optional().nullable(),
        template: z.string().optional().nullable(),
        watermark: z.boolean().optional(),
        isScheduled: z.boolean().optional(),
        visibility: z.string().optional(),
        password: z.string().optional().nullable(),
        shareUrl: z.string().optional().nullable(),
        shortLink: z.string().optional().nullable(),
        downloadCount: z.number().int().optional(),
        viewCount: z.number().int().optional(),
        processingTime: z.number().int().optional().nullable(),
        lastError: z.string().optional().nullable(),
        retryCount: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        expireAt: z.coerce.date().optional().nullable(),
        lastAccessedAt: z.coerce.date().optional().nullable(),
        scheduledAt: z.coerce.date().optional().nullable(),
        completedAt: z.coerce.date().optional().nullable(),
        createdBy: z.string().optional().nullable(),
        projectId: z.string().optional().nullable()
    })
    .strict()

export default ReportCreateManyInputSchema
