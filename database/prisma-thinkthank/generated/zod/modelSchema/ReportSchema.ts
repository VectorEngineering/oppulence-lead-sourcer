import { z } from 'zod'
import { ReportTypeSchema } from '../inputTypeSchemas/ReportTypeSchema'
import { ReportFormatSchema } from '../inputTypeSchemas/ReportFormatSchema'
import { ReportStatusSchema } from '../inputTypeSchemas/ReportStatusSchema'

/////////////////////////////////////////
// REPORT SCHEMA
/////////////////////////////////////////

export const ReportSchema = z.object({
    type: ReportTypeSchema,
    format: ReportFormatSchema,
    status: ReportStatusSchema,
    id: z.string().cuid(),
    name: z.string(),
    description: z.string().nullish(),
    from: z.coerce.date().nullish(),
    to: z.coerce.date().nullish(),
    timeZone: z.string(),
    fileUrl: z.string().nullish(),
    fileSize: z.number().int().nullish(),
    pageCount: z.number().int().nullish(),
    rowCount: z.number().int().nullish(),
    currency: z.string().nullish(),
    language: z.string(),
    template: z.string().nullish(),
    watermark: z.boolean(),
    isScheduled: z.boolean(),
    visibility: z.string(),
    password: z.string().nullish(),
    shareUrl: z.string().nullish(),
    shortLink: z.string().nullish(),
    downloadCount: z.number().int(),
    viewCount: z.number().int(),
    processingTime: z.number().int().nullish(),
    lastError: z.string().nullish(),
    retryCount: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    expireAt: z.coerce.date().nullish(),
    lastAccessedAt: z.coerce.date().nullish(),
    scheduledAt: z.coerce.date().nullish(),
    completedAt: z.coerce.date().nullish(),
    createdBy: z.string().nullish(),
    projectId: z.string().nullish()
})

export type Report = z.infer<typeof ReportSchema>

/////////////////////////////////////////
// REPORT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportOptionalDefaultsSchema = ReportSchema.merge(
    z.object({
        format: ReportFormatSchema.optional(),
        status: ReportStatusSchema.optional(),
        id: z.string().cuid().optional(),
        timeZone: z.string().optional(),
        language: z.string().optional(),
        watermark: z.boolean().optional(),
        isScheduled: z.boolean().optional(),
        visibility: z.string().optional(),
        downloadCount: z.number().int().optional(),
        viewCount: z.number().int().optional(),
        retryCount: z.number().int().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ReportOptionalDefaults = z.infer<typeof ReportOptionalDefaultsSchema>

export default ReportSchema
