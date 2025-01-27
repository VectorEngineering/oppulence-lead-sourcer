import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'
import { DashboardUpdateWithoutProjectInputSchema } from './DashboardUpdateWithoutProjectInputSchema'
import { DashboardUncheckedUpdateWithoutProjectInputSchema } from './DashboardUncheckedUpdateWithoutProjectInputSchema'

export const DashboardUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DashboardUpdateWithWhereUniqueWithoutProjectInput> =
    z
        .object({
            where: z.lazy(() => DashboardWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => DashboardUpdateWithoutProjectInputSchema),
                z.lazy(() => DashboardUncheckedUpdateWithoutProjectInputSchema)
            ])
        })
        .strict()

export default DashboardUpdateWithWhereUniqueWithoutProjectInputSchema
