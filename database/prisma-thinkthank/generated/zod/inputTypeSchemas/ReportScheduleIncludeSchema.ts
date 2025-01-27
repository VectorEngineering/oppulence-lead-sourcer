import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ReportArgsSchema } from '../outputTypeSchemas/ReportArgsSchema'

export const ReportScheduleIncludeSchema: z.ZodType<Prisma.ReportScheduleInclude> = z
    .object({
        report: z.union([z.boolean(), z.lazy(() => ReportArgsSchema)]).optional()
    })
    .strict()

export default ReportScheduleIncludeSchema
