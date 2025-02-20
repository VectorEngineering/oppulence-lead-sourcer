import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScheduleCreateWithoutReportInputSchema } from './ReportScheduleCreateWithoutReportInputSchema'
import { ReportScheduleUncheckedCreateWithoutReportInputSchema } from './ReportScheduleUncheckedCreateWithoutReportInputSchema'
import { ReportScheduleCreateOrConnectWithoutReportInputSchema } from './ReportScheduleCreateOrConnectWithoutReportInputSchema'
import { ReportScheduleCreateManyReportInputEnvelopeSchema } from './ReportScheduleCreateManyReportInputEnvelopeSchema'
import { ReportScheduleWhereUniqueInputSchema } from './ReportScheduleWhereUniqueInputSchema'

export const ReportScheduleUncheckedCreateNestedManyWithoutReportInputSchema: z.ZodType<Prisma.ReportScheduleUncheckedCreateNestedManyWithoutReportInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportScheduleCreateWithoutReportInputSchema),
                    z.lazy(() => ReportScheduleCreateWithoutReportInputSchema).array(),
                    z.lazy(() => ReportScheduleUncheckedCreateWithoutReportInputSchema),
                    z.lazy(() => ReportScheduleUncheckedCreateWithoutReportInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ReportScheduleCreateOrConnectWithoutReportInputSchema),
                    z.lazy(() => ReportScheduleCreateOrConnectWithoutReportInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ReportScheduleCreateManyReportInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => ReportScheduleWhereUniqueInputSchema), z.lazy(() => ReportScheduleWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default ReportScheduleUncheckedCreateNestedManyWithoutReportInputSchema
