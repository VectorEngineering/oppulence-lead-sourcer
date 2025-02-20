import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'

export const ReportScheduleSelectSchema: z.ZodType<Prisma.ReportScheduleSelect> = z
    .object({
        id: z.boolean().optional(),
        reportId: z.boolean().optional(),
        frequency: z.boolean().optional(),
        dayOfWeek: z.boolean().optional(),
        dayOfMonth: z.boolean().optional(),
        hour: z.boolean().optional(),
        minute: z.boolean().optional(),
        isActive: z.boolean().optional(),
        lastRun: z.boolean().optional(),
        nextRun: z.boolean().optional(),
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export default ReportScheduleSelectSchema
