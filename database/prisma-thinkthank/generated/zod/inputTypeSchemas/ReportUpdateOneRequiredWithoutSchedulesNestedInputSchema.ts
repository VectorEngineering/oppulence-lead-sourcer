import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutSchedulesInputSchema } from './ReportCreateWithoutSchedulesInputSchema'
import { ReportUncheckedCreateWithoutSchedulesInputSchema } from './ReportUncheckedCreateWithoutSchedulesInputSchema'
import { ReportCreateOrConnectWithoutSchedulesInputSchema } from './ReportCreateOrConnectWithoutSchedulesInputSchema'
import { ReportUpsertWithoutSchedulesInputSchema } from './ReportUpsertWithoutSchedulesInputSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportUpdateToOneWithWhereWithoutSchedulesInputSchema } from './ReportUpdateToOneWithWhereWithoutSchedulesInputSchema'
import { ReportUpdateWithoutSchedulesInputSchema } from './ReportUpdateWithoutSchedulesInputSchema'
import { ReportUncheckedUpdateWithoutSchedulesInputSchema } from './ReportUncheckedUpdateWithoutSchedulesInputSchema'

export const ReportUpdateOneRequiredWithoutSchedulesNestedInputSchema: z.ZodType<Prisma.ReportUpdateOneRequiredWithoutSchedulesNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => ReportCreateWithoutSchedulesInputSchema),
                    z.lazy(() => ReportUncheckedCreateWithoutSchedulesInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutSchedulesInputSchema).optional(),
            upsert: z.lazy(() => ReportUpsertWithoutSchedulesInputSchema).optional(),
            connect: z.lazy(() => ReportWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => ReportUpdateToOneWithWhereWithoutSchedulesInputSchema),
                    z.lazy(() => ReportUpdateWithoutSchedulesInputSchema),
                    z.lazy(() => ReportUncheckedUpdateWithoutSchedulesInputSchema)
                ])
                .optional()
        })
        .strict()

export default ReportUpdateOneRequiredWithoutSchedulesNestedInputSchema
