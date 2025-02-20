import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportUpdateWithoutAccessUsersInputSchema } from './ReportUpdateWithoutAccessUsersInputSchema'
import { ReportUncheckedUpdateWithoutAccessUsersInputSchema } from './ReportUncheckedUpdateWithoutAccessUsersInputSchema'
import { ReportCreateWithoutAccessUsersInputSchema } from './ReportCreateWithoutAccessUsersInputSchema'
import { ReportUncheckedCreateWithoutAccessUsersInputSchema } from './ReportUncheckedCreateWithoutAccessUsersInputSchema'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'

export const ReportUpsertWithoutAccessUsersInputSchema: z.ZodType<Prisma.ReportUpsertWithoutAccessUsersInput> = z
    .object({
        update: z.union([
            z.lazy(() => ReportUpdateWithoutAccessUsersInputSchema),
            z.lazy(() => ReportUncheckedUpdateWithoutAccessUsersInputSchema)
        ]),
        create: z.union([
            z.lazy(() => ReportCreateWithoutAccessUsersInputSchema),
            z.lazy(() => ReportUncheckedCreateWithoutAccessUsersInputSchema)
        ]),
        where: z.lazy(() => ReportWhereInputSchema).optional()
    })
    .strict()

export default ReportUpsertWithoutAccessUsersInputSchema
