import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportCreateWithoutSortingsInputSchema } from './ReportCreateWithoutSortingsInputSchema'
import { ReportUncheckedCreateWithoutSortingsInputSchema } from './ReportUncheckedCreateWithoutSortingsInputSchema'
import { ReportCreateOrConnectWithoutSortingsInputSchema } from './ReportCreateOrConnectWithoutSortingsInputSchema'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'

export const ReportCreateNestedOneWithoutSortingsInputSchema: z.ZodType<Prisma.ReportCreateNestedOneWithoutSortingsInput> = z
    .object({
        create: z
            .union([z.lazy(() => ReportCreateWithoutSortingsInputSchema), z.lazy(() => ReportUncheckedCreateWithoutSortingsInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => ReportCreateOrConnectWithoutSortingsInputSchema).optional(),
        connect: z.lazy(() => ReportWhereUniqueInputSchema).optional()
    })
    .strict()

export default ReportCreateNestedOneWithoutSortingsInputSchema
