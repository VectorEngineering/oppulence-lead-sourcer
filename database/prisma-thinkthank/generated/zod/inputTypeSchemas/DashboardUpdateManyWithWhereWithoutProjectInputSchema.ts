import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardScalarWhereInputSchema } from './DashboardScalarWhereInputSchema'
import { DashboardUpdateManyMutationInputSchema } from './DashboardUpdateManyMutationInputSchema'
import { DashboardUncheckedUpdateManyWithoutProjectInputSchema } from './DashboardUncheckedUpdateManyWithoutProjectInputSchema'

export const DashboardUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.DashboardUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DashboardScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => DashboardUpdateManyMutationInputSchema),
            z.lazy(() => DashboardUncheckedUpdateManyWithoutProjectInputSchema)
        ])
    })
    .strict()

export default DashboardUpdateManyWithWhereWithoutProjectInputSchema
