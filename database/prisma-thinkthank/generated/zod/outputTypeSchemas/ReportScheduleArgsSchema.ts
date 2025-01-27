import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportScheduleSelectSchema } from '../inputTypeSchemas/ReportScheduleSelectSchema'
import { ReportScheduleIncludeSchema } from '../inputTypeSchemas/ReportScheduleIncludeSchema'

export const ReportScheduleArgsSchema: z.ZodType<Prisma.ReportScheduleDefaultArgs> = z
    .object({
        select: z.lazy(() => ReportScheduleSelectSchema).optional(),
        include: z.lazy(() => ReportScheduleIncludeSchema).optional()
    })
    .strict()

export default ReportScheduleArgsSchema
