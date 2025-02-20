import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportCreateWithoutColumnsInputSchema } from './ReportCreateWithoutColumnsInputSchema'
import { ReportUncheckedCreateWithoutColumnsInputSchema } from './ReportUncheckedCreateWithoutColumnsInputSchema'

export const ReportCreateOrConnectWithoutColumnsInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutColumnsInput> = z
    .object({
        where: z.lazy(() => ReportWhereUniqueInputSchema),
        create: z.union([z.lazy(() => ReportCreateWithoutColumnsInputSchema), z.lazy(() => ReportUncheckedCreateWithoutColumnsInputSchema)])
    })
    .strict()

export default ReportCreateOrConnectWithoutColumnsInputSchema
