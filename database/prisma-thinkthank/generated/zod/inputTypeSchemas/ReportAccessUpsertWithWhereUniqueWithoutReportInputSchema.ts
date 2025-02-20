import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithoutReportInputSchema } from './ReportAccessUpdateWithoutReportInputSchema'
import { ReportAccessUncheckedUpdateWithoutReportInputSchema } from './ReportAccessUncheckedUpdateWithoutReportInputSchema'
import { ReportAccessCreateWithoutReportInputSchema } from './ReportAccessCreateWithoutReportInputSchema'
import { ReportAccessUncheckedCreateWithoutReportInputSchema } from './ReportAccessUncheckedCreateWithoutReportInputSchema'

export const ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUpsertWithWhereUniqueWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => ReportAccessUpdateWithoutReportInputSchema),
                z.lazy(() => ReportAccessUncheckedUpdateWithoutReportInputSchema)
            ]),
            create: z.union([
                z.lazy(() => ReportAccessCreateWithoutReportInputSchema),
                z.lazy(() => ReportAccessUncheckedCreateWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportAccessUpsertWithWhereUniqueWithoutReportInputSchema
