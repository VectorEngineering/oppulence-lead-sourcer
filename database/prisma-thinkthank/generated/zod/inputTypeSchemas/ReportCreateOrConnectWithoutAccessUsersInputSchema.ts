import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereUniqueInputSchema } from './ReportWhereUniqueInputSchema'
import { ReportCreateWithoutAccessUsersInputSchema } from './ReportCreateWithoutAccessUsersInputSchema'
import { ReportUncheckedCreateWithoutAccessUsersInputSchema } from './ReportUncheckedCreateWithoutAccessUsersInputSchema'

export const ReportCreateOrConnectWithoutAccessUsersInputSchema: z.ZodType<Prisma.ReportCreateOrConnectWithoutAccessUsersInput> = z
    .object({
        where: z.lazy(() => ReportWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => ReportCreateWithoutAccessUsersInputSchema),
            z.lazy(() => ReportUncheckedCreateWithoutAccessUsersInputSchema)
        ])
    })
    .strict()

export default ReportCreateOrConnectWithoutAccessUsersInputSchema
