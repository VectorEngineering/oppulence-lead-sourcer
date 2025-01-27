import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutSchedulesInputSchema } from './ReportCreateWithoutSchedulesInputSchema'
import { ReportUncheckedCreateWithoutSchedulesInputSchema } from './ReportUncheckedCreateWithoutSchedulesInputSchema'
import { ReportCreateOrConnectWithoutSchedulesInputSchema } from './ReportCreateOrConnectWithoutSchedulesInputSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'

export const ReportCreateNestedOneWithoutSchedulesInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutSchedulesInput> = z
    .object({
        create: z
            .union([z.lazy(() => ReportCreateWithoutSchedulesInputSchema), z.lazy(() => ReportUncheckedCreateWithoutSchedulesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutSchedulesInputSchema).optional(),
        connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
    })
    .strict()

export default ReportCreateNestedOneWithoutSchedulesInputSchema
