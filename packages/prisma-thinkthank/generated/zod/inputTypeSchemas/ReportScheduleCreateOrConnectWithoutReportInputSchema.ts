import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScheduleWhereUniqueInputSchema } from './ReportScheduleWhereUniqueInputSchema'
import { ReportScheduleCreateWithoutReportInputSchema } from './ReportScheduleCreateWithoutReportInputSchema'
import { ReportScheduleUncheckedCreateWithoutReportInputSchema } from './ReportScheduleUncheckedCreateWithoutReportInputSchema'

export const ReportScheduleCreateOrConnectWithoutReportInputSchema: z.ZodType<Prisma.ReportScheduleCreateOrConnectWithoutReportInput> = z
    .object({
        where: z.lazy(() => ReportScheduleWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ReportScheduleCreateWithoutReportInputSchema),
            z.lazy(() => ReportScheduleUncheckedCreateWithoutReportInputSchema)
        ])
    })
    .strict()

export default ReportScheduleCreateOrConnectWithoutReportInputSchema
