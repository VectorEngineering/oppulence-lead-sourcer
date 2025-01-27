import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ReportWhereInputSchema } from './ReportWhereInputSchema'
import { ReportUpdateWithoutAccessUsersInputSchema } from './ReportUpdateWithoutAccessUsersInputSchema'
import { ReportUncheckedUpdateWithoutAccessUsersInputSchema } from './ReportUncheckedUpdateWithoutAccessUsersInputSchema'

export const ReportUpdateToOneWithWhereWithoutAccessUsersInputSchema: z.ZodType<Prisma.ReportUpdateToOneWithWhereWithoutAccessUsersInput> =
    z
        .object({
            where: z.lazy(() => ReportWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => ReportUpdateWithoutAccessUsersInputSchema),
                z.lazy(() => ReportUncheckedUpdateWithoutAccessUsersInputSchema)
            ])
        })
        .strict()

export default ReportUpdateToOneWithWhereWithoutAccessUsersInputSchema
