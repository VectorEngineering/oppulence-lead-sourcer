import { z } from 'zod'

/////////////////////////////////////////
// REPORT COLUMN SCHEMA
/////////////////////////////////////////

export const ReportColumnSchema = z.object({
    id: z.string().cuid(),
    reportId: z.string(),
    field: z.string(),
    label: z.string().nullish(),
    width: z.number().int().nullish(),
    position: z.number().int(),
    isVisible: z.boolean(),
    format: z.string().nullish()
})

export type ReportColumn = z.infer<typeof ReportColumnSchema>

/////////////////////////////////////////
// REPORT COLUMN OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportColumnOptionalDefaultsSchema = ReportColumnSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        isVisible: z.boolean().optional()
    })
)

export type ReportColumnOptionalDefaults = z.infer<typeof ReportColumnOptionalDefaultsSchema>

export default ReportColumnSchema
