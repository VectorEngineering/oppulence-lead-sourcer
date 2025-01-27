import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutFiltersInputSchema } from './ReportCreateWithoutFiltersInputSchema'
import { ReportUncheckedCreateWithoutFiltersInputSchema } from './ReportUncheckedCreateWithoutFiltersInputSchema'
import { ReportCreateOrConnectWithoutFiltersInputSchema } from './ReportCreateOrConnectWithoutFiltersInputSchema'
import { ReportUpsertWithoutFiltersInputSchema } from './ReportUpsertWithoutFiltersInputSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportUpdateToOneWithWhereWithoutFiltersInputSchema } from './ReportUpdateToOneWithWhereWithoutFiltersInputSchema'
import { ReportUpdateWithoutFiltersInputSchema } from './ReportUpdateWithoutFiltersInputSchema'
import { ReportUncheckedUpdateWithoutFiltersInputSchema } from './ReportUncheckedUpdateWithoutFiltersInputSchema'

export const ReportUpdateOneRequiredWithoutFiltersNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutFiltersNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => ReportCreateWithoutFiltersInputSchema), z.lazy(() => ReportUncheckedCreateWithoutFiltersInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutFiltersInputSchema).optional(),
        upsert: z.lazy(() => ReportUpsertWithoutFiltersInputSchema).optional(),
        connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => ReportUpdateToOneWithWhereWithoutFiltersInputSchema),
                z.lazy(() => ReportUpdateWithoutFiltersInputSchema),
                z.lazy(() => ReportUncheckedUpdateWithoutFiltersInputSchema)
            ])
            .optional()
    })
    .strict()

export default ReportUpdateOneRequiredWithoutFiltersNestedInputSchema
