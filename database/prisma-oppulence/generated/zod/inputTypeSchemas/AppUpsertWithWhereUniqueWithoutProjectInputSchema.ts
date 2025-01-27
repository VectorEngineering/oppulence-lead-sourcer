import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppUpdateWithoutProjectInputSchema } from './AppUpdateWithoutProjectInputSchema'
import { AppUncheckedUpdateWithoutProjectInputSchema } from './AppUncheckedUpdateWithoutProjectInputSchema'
import { AppCreateWithoutProjectInputSchema } from './AppCreateWithoutProjectInputSchema'
import { AppUncheckedCreateWithoutProjectInputSchema } from './AppUncheckedCreateWithoutProjectInputSchema'

export const AppUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.AppUpsertWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        update: z.union([z.lazy(() => AppUpdateWithoutProjectInputSchema), z.lazy(() => AppUncheckedUpdateWithoutProjectInputSchema)]),
        create: z.union([z.lazy(() => AppCreateWithoutProjectInputSchema), z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default AppUpsertWithWhereUniqueWithoutProjectInputSchema
