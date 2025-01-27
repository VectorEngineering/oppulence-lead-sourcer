import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessWhereUniqueInputSchema } from './ReportAccessWhereUniqueInputSchema'
import { ReportAccessUpdateWithoutReportInputSchema } from './ReportAccessUpdateWithoutReportInputSchema'
import { ReportAccessUncheckedUpdateWithoutReportInputSchema } from './ReportAccessUncheckedUpdateWithoutReportInputSchema'

export const ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUpdateWithWhereUniqueWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportAccessWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => ReportAccessUpdateWithoutReportInputSchema),
                z.lazy(() => ReportAccessUncheckedUpdateWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportAccessUpdateWithWhereUniqueWithoutReportInputSchema
