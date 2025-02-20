import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema'
import { DashboardUpdateWithoutUserInputSchema } from './DashboardUpdateWithoutUserInputSchema'
import { DashboardUncheckedUpdateWithoutUserInputSchema } from './DashboardUncheckedUpdateWithoutUserInputSchema'
import { DashboardCreateWithoutUserInputSchema } from './DashboardCreateWithoutUserInputSchema'
import { DashboardUncheckedCreateWithoutUserInputSchema } from './DashboardUncheckedCreateWithoutUserInputSchema'

export const DashboardUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.DashboardUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => DashboardWhereUniqueInputSchema),
        update: z.union([
            z.lazy(() => DashboardUpdateWithoutUserInputSchema),
            z.lazy(() => DashboardUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([z.lazy(() => DashboardCreateWithoutUserInputSchema), z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default DashboardUpsertWithWhereUniqueWithoutUserInputSchema
