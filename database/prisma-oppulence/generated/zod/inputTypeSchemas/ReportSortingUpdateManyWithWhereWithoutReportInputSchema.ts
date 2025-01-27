import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportSortingScalarWhereInputSchema } from './ReportSortingScalarWhereInputSchema'
import { ReportSortingUpdateManyMutationInputSchema } from './ReportSortingUpdateManyMutationInputSchema'
import { ReportSortingUncheckedUpdateManyWithoutReportInputSchema } from './ReportSortingUncheckedUpdateManyWithoutReportInputSchema'

export const ReportSortingUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportSortingUpdateManyWithWhereWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportSortingScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ReportSortingUpdateManyMutationInputSchema),
                z.lazy(() => ReportSortingUncheckedUpdateManyWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportSortingUpdateManyWithWhereWithoutReportInputSchema
