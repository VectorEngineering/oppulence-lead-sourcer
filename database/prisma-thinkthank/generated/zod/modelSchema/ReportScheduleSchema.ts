import { z } from 'zod'

/////////////////////////////////////////
// REPORT SCHEDULE SCHEMA
/////////////////////////////////////////

export const ReportScheduleSchema = z.object({
    id: z.string().cuid(),
    reportId: z.string(),
    frequency: z.string(),
    dayOfWeek: z.number().int().nullish(),
    dayOfMonth: z.number().int().nullish(),
    hour: z.number().int(),
    minute: z.number().int(),
    isActive: z.boolean(),
    lastRun: z.coerce.date().nullish(),
    nextRun: z.coerce.date().nullish()
})

export type ReportSchedule = z.infer<typeof ReportScheduleSchema>

/////////////////////////////////////////
// REPORT SCHEDULE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ReportScheduleOptionalDefaultsSchema = ReportScheduleSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        isActive: z.boolean().optional()
    })
)

export type ReportScheduleOptionalDefaults = z.infer<typeof ReportScheduleOptionalDefaultsSchema>

export default ReportScheduleSchema
