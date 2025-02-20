import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportUpdateWithoutCreatorInputSchema } from './ReportUpdateWithoutCreatorInputSchema'
import { ReportUncheckedUpdateWithoutCreatorInputSchema } from './ReportUncheckedUpdateWithoutCreatorInputSchema'
import { ReportCreateWithoutCreatorInputSchema } from './ReportCreateWithoutCreatorInputSchema'
import { ReportUncheckedCreateWithoutCreatorInputSchema } from './ReportUncheckedCreateWithoutCreatorInputSchema'

export const ReportUpsertWithWhereUniqueWithoutCreatorInputSchema: z.ZodType<Prisma.ReportUpsertWithWhereUniqueWithoutCreatorInput> = z
    .object({
        where: z.lazy(() => ReportWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => ReportUpdateWithoutCreatorInputSchema),
            z.lazy(() => ReportUncheckedUpdateWithoutCreatorInputSchema)
        ]),
        create: z.union([z.lazy(() => ReportCreateWithoutCreatorInputSchema), z.lazy(() => ReportUncheckedCreateWithoutCreatorInputSchema)])
    })
    .strict()

export default ReportUpsertWithWhereUniqueWithoutCreatorInputSchema
