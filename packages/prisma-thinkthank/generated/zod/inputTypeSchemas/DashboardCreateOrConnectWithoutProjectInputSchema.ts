import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'
import { DashboardCreateWithoutProjectInputSchema } from './DashboardCreateWithoutProjectInputSchema'
import { DashboardUncheckedCreateWithoutProjectInputSchema } from './DashboardUncheckedCreateWithoutProjectInputSchema'

export const DashboardCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.DashboardCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DashboardWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => DashboardCreateWithoutProjectInputSchema),
            z.lazy(() => DashboardUncheckedCreateWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DashboardCreateOrConnectWithoutProjectInputSchema
