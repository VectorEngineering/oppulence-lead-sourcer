import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppUpdateWithoutProjectInputSchema } from './AppUpdateWithoutProjectInputSchema'
import { AppUncheckedUpdateWithoutProjectInputSchema } from './AppUncheckedUpdateWithoutProjectInputSchema'

export const AppUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.AppUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        data: z.union([z.lazy(() => AppUpdateWithoutProjectInputSchema), z.lazy(() => AppUncheckedUpdateWithoutProjectInputSchema)])
    })
    .strict()

export default AppUpdateWithWhereUniqueWithoutProjectInputSchema
