import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppCreateWithoutProjectInputSchema } from './AppCreateWithoutProjectInputSchema'
import { AppUncheckedCreateWithoutProjectInputSchema } from './AppUncheckedCreateWithoutProjectInputSchema'

export const AppCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.AppCreateOrConnectWithoutProjectInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        create: z.union([z.lazy(() => AppCreateWithoutProjectInputSchema), z.lazy(() => AppUncheckedCreateWithoutProjectInputSchema)])
    })
    .strict()

export default AppCreateOrConnectWithoutProjectInputSchema
