import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { ReportUpdateWithoutFiltersInputSchema } from './ReportUpdateWithoutFiltersInputSchema'
import { ReportUncheckedUpdateWithoutFiltersInputSchema } from './ReportUncheckedUpdateWithoutFiltersInputSchema'

export const ReportUpdateToOneWithWhereWithoutFiltersInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutFiltersInput> = z
    .object({
        where: z.lazy(() => ReportWhereInputSchema).optional(),
        data: z.union([z.lazy(() => ReportUpdateWithoutFiltersInputSchema), z.lazy(() => ReportUncheckedUpdateWithoutFiltersInputSchema)])
    })
    .strict()

export default ReportUpdateToOneWithWhereWithoutFiltersInputSchema
