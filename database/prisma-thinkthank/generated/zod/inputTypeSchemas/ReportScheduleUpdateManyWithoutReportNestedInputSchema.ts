import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportScheduleCreateWithoutReportInputSchema } from './ReportScheduleCreateWithoutReportInputSchema'
import { ReportScheduleUncheckedCreateWithoutReportInputSchema } from './ReportScheduleUncheckedCreateWithoutReportInputSchema'
import { ReportScheduleCreateOrConnectWithoutReportInputSchema } from './ReportScheduleCreateOrConnectWithoutReportInputSchema'
import { ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema'
import { ReportScheduleCreateManyReportInputEnvelopeSchema } from './ReportScheduleCreateManyReportInputEnvelopeSchema'
import { ReportScheduleWhereUniqueInputSchema } from './ReportScheduleWhereUniqueInputSchema'
import { ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema'
import { ReportScheduleUpdateManyWithWhereWithoutReportInputSchema } from './ReportScheduleUpdateManyWithWhereWithoutReportInputSchema'
import { ReportScheduleScalarWhereInputSchema } from './ReportScheduleScalarWhereInputSchema'

export const ReportScheduleUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportScheduleUpdateManyWithoutReportNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema),
                z.lazy(() => ReportScheduleUpsertWithWhereUniqueWithoutReportInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => ReportScheduleCreateManyReportInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => ReportScheduleWhereUniqueInputSchema), z.lazy(() => ReportScheduleWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => ReportScheduleWhereUniqueInputSchema), z.lazy(() => ReportScheduleWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => ReportScheduleWhereUniqueInputSchema), z.lazy(() => ReportScheduleWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => ReportScheduleWhereUniqueInputSchema), z.lazy(() => ReportScheduleWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema),
                z.lazy(() => ReportScheduleUpdateWithWhereUniqueWithoutReportInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ReportScheduleUpdateManyWithWhereWithoutReportInputSchema),
                z.lazy(() => ReportScheduleUpdateManyWithWhereWithoutReportInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => ReportScheduleScalarWhereInputSchema), z.lazy(() => ReportScheduleScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default ReportScheduleUpdateManyWithoutReportNestedInputSchema
