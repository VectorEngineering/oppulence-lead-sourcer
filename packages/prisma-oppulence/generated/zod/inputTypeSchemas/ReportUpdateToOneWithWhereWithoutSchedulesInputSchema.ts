import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { ReportUpdateWithoutSchedulesInputSchema } from './ReportUpdateWithoutSchedulesInputSchema'
import { ReportUncheckedUpdateWithoutSchedulesInputSchema } from './ReportUncheckedUpdateWithoutSchedulesInputSchema'

export const ReportUpdateToOneWithWhereWithoutSchedulesInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutSchedulesInput> = z
    .object({
        where: z.lazy(() => ReportWhereInputSchema).optional(),
        data: z.union([
            z.lazy(() => ReportUpdateWithoutSchedulesInputSchema),
            z.lazy(() => ReportUncheckedUpdateWithoutSchedulesInputSchema)
        ])
    })
    .strict()

export default ReportUpdateToOneWithWhereWithoutSchedulesInputSchema
