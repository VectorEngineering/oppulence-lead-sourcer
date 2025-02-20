import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessCreateWithoutReportInputSchema } from './ReportAccessCreateWithoutReportInputSchema'
import { ReportAccessUncheckedCreateWithoutReportInputSchema } from './ReportAccessUncheckedCreateWithoutReportInputSchema'
import { ReportAccessCreateOrConnectWithoutReportInputSchema } from './ReportAccessCreateOrConnectWithoutReportInputSchema'
import { ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema } from './ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema'
import { ReportAccessCreateManyReportInputEnvelopeSchema } from './ReportAccessCreateManyReportInputEnvelopeSchema'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema } from './ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema'
import { ReportAccessUpdateManyWithWhereWithoutReportInputSchema } from './ReportAccessUpdateManyWithWhereWithoutReportInputSchema'
import { ReportAccessScalarWhereInputSchema } from './ReportAccessScalarWhereInputSchema'

export const ReportAccessUncheckedUpdateManyWithoutReportNestedInputSchema: z.ZodType<Prisma.ReportAccessUncheckedUpdateManyWithoutReportNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportAccessCreateWithoutReportInputSchema),
                    z.lazy(() => ReportAccessCreateWithoutReportInputSchema).array(),
                    z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema),
                    z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => ReportAccessCreateOrConnectWithoutReportInputSchema),
                    z.lazy(() => ReportAccessCreateOrConnectWithoutReportInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema),
                    z.lazy(() => ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => ReportAccessCreateManyReportInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => ReportAccessWhereUniqueInputSchema), z.lazy(() => ReportAccessWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema),
                    z.lazy(() => ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => ReportAccessUpdateManyWithWhereWithoutReportInputSchema),
                    z.lazy(() => ReportAccessUpdateManyWithWhereWithoutReportInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => ReportAccessScalarWhereInputSchema), z.lazy(() => ReportAccessScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default ReportAccessUncheckedUpdateManyWithoutReportNestedInputSchema
