import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ReportScheduleCreateManyReportInputSchema: z.ZodType<Prisma.ReportScheduleCreateManyReportInput> = z
    .object({
        id: z.string().cuid().optional(),
        frequency: z.string(),
        dayOfWeek: z.number().int().optional().nullable(),
        dayOfMonth: z.number().int().optional().nullable(),
        hour: z.number().int(),
        minute: z.number().int(),
        isActive: z.boolean().optional(),
        lastRun: z.coerce.date().optional().nullable(),
        nextRun: z.coerce.date().optional().nullable()
    })
    .strict()

export default ReportScheduleCreateManyReportInputSchema
