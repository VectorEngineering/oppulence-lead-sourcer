import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportSortingCreateWithoutReportInputSchema } from './ReportSortingCreateWithoutReportInputSchema'
import { ReportSortingUncheckedCreateWithoutReportInputSchema } from './ReportSortingUncheckedCreateWithoutReportInputSchema'
import { ReportSortingCreateOrConnectWithoutReportInputSchema } from './ReportSortingCreateOrConnectWithoutReportInputSchema'
import { ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema'
import { ReportSortingCreateManyReportInputEnvelopeSchema } from './ReportSortingCreateManyReportInputEnvelopeSchema'
import { ReportSortingWhereUniqueInputSchema } from './ReportSortingWhereUniqueInputSchema'
import { ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema'
import { ReportSortingUpdateManyWithWhereWithoutReportInputSchema } from './ReportSortingUpdateManyWithWhereWithoutReportInputSchema'
import { ReportSortingScalarWhereInputSchema } from './ReportSortingScalarWhereInputSchema'

export const ReportSortingUncheckedUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportSortingUncheckedUpdateManyWithoutReportNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportSortingCreateWithoutReportInputSchema),
                    z.lazy(() => ReportSortingCreateWithoutReportInputSchema).array(),
                    z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema),
                    z.lazy(() => ReportSortingUncheckedCreateWithoutReportInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ReportSortingCreateOrConnectWithoutReportInputSchema),
                    z.lazy(() => ReportSortingCreateOrConnectWithoutReportInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema),
                    z.lazy(() => ReportSortingUpsertWithWhereUniqueWithoutReportInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ReportSortingCreateManyReportInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ReportSortingWhereUniqueInputSchema), z.lazy(() => ReportSortingWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ReportSortingWhereUniqueInputSchema), z.lazy(() => ReportSortingWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ReportSortingWhereUniqueInputSchema), z.lazy(() => ReportSortingWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ReportSortingWhereUniqueInputSchema), z.lazy(() => ReportSortingWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema),
                    z.lazy(() => ReportSortingUpdateWithWhereUniqueWithoutReportInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ReportSortingUpdateManyWithWhereWithoutReportInputSchema),
                    z.lazy(() => ReportSortingUpdateManyWithWhereWithoutReportInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ReportSortingScalarWhereInputSchema), z.lazy(() => ReportSortingScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ReportSortingUncheckedUpdateManyWithoutReportNestedInputSchema
