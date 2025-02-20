import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportAccessScalarWhereInputSchema } from './ReportAccessScalarWhereInputSchema'
import { ReportAccessUpdateManyMutationInputSchema } from './ReportAccessUpdateManyMutationInputSchema'
import { ReportAccessUncheckedUpdateManyWithoutReportInputSchema } from './ReportAccessUncheckedUpdateManyWithoutReportInputSchema'

export const ReportAccessUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportAccessUpdateManyWithWhereWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportAccessScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ReportAccessUpdateManyMutationInputSchema),
                z.lazy(() => ReportAccessUncheckedUpdateManyWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportAccessUpdateManyWithWhereWithoutReportInputSchema
