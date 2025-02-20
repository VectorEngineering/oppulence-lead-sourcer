import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportColumnScalarWhereInputSchema } from './ReportColumnScalarWhereInputSchema'
import { ReportColumnUpdateManyMutationInputSchema } from './ReportColumnUpdateManyMutationInputSchema'
import { ReportColumnUncheckedUpdateManyWithoutReportInputSchema } from './ReportColumnUncheckedUpdateManyWithoutReportInputSchema'

export const ReportColumnUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportColumnUpdateManyWithWhereWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportColumnScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ReportColumnUpdateManyMutationInputSchema),
                z.lazy(() => ReportColumnUncheckedUpdateManyWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportColumnUpdateManyWithWhereWithoutReportInputSchema
