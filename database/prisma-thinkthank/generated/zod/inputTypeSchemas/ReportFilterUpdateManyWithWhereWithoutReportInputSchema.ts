import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportFilterScalarWhereInputSchema } from './ReportFilterScalarWhereInputSchema'
import { ReportFilterUpdateManyMutationInputSchema } from './ReportFilterUpdateManyMutationInputSchema'
import { ReportFilterUncheckedUpdateManyWithoutReportInputSchema } from './ReportFilterUncheckedUpdateManyWithoutReportInputSchema'

export const ReportFilterUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportFilterUpdateManyWithWhereWithoutReportInput> =
    z
        .object({
            where: z.lazy(() => ReportFilterScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => ReportFilterUpdateManyMutationInputSchema),
                z.lazy(() => ReportFilterUncheckedUpdateManyWithoutReportInputSchema)
            ])
        })
        .strict()

export default ReportFilterUpdateManyWithWhereWithoutReportInputSchema
