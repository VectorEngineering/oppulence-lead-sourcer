import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppUpdateWithoutUserInputSchema } from './AppUpdateWithoutUserInputSchema'
import { AppUncheckedUpdateWithoutUserInputSchema } from './AppUncheckedUpdateWithoutUserInputSchema'
import { AppCreateWithoutUserInputSchema } from './AppCreateWithoutUserInputSchema'
import { AppUncheckedCreateWithoutUserInputSchema } from './AppUncheckedCreateWithoutUserInputSchema'

export const AppUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AppUpsertWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        update: z.union([z.lazy(() => AppUpdateWithoutUserInputSchema), z.lazy(() => AppUncheckedUpdateWithoutUserInputSchema)]),
        create: z.union([z.lazy(() => AppCreateWithoutUserInputSchema), z.lazy(() => AppUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default AppUpsertWithWhereUniqueWithoutUserInputSchema
