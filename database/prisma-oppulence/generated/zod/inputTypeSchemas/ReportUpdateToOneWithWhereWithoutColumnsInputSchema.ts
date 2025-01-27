import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { ReportUpdateWithoutColumnsInputSchema } from './ReportUpdateWithoutColumnsInputSchema'
import { ReportUncheckedUpdateWithoutColumnsInputSchema } from './ReportUncheckedUpdateWithoutColumnsInputSchema'

export const ReportUpdateToOneWithWhereWithoutColumnsInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutColumnsInput> = z
    .object({
        where: z.lazy(() => ReportWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ReportUpdateWithoutColumnsInputSchema), z.lazy(() => ReportUncheckedUpdateWithoutColumnsInputSchema)])
    })
    .strict()

export default ReportUpdateToOneWithWhereWithoutColumnsInputSchema
