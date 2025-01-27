import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportUpdateWithoutCreatorInputSchema } from './ReportUpdateWithoutCreatorInputSchema'
import { ReportUncheckedUpdateWithoutCreatorInputSchema } from './ReportUncheckedUpdateWithoutCreatorInputSchema'

export const ReportUpdateWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.ReportUpdateWithWhereUniqueWithoutCreatorInput> = z
    .object({
        where: z.lazy(() => ReportWhereUniqueInputSchema),
        data: z.union([z.lazy(() => ReportUpdateWithoutCreatorInputSchema), z.lazy(() => ReportUncheckedUpdateWithoutCreatorInputSchema)])
    })
    .strict()

export default ReportUpdateWithWhereUniqueWithoutCreatorInputSchema
