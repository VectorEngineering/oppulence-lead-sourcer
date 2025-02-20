import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppUpdateWithoutUserInputSchema } from './AppUpdateWithoutUserInputSchema'
import { AppUncheckedUpdateWithoutUserInputSchema } from './AppUncheckedUpdateWithoutUserInputSchema'

export const AppUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AppUpdateWithWhereUniqueWithoutUserInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        data: z.union([z.lazy(() => AppUpdateWithoutUserInputSchema), z.lazy(() => AppUncheckedUpdateWithoutUserInputSchema)])
    })
    .strict()

export default AppUpdateWithWhereUniqueWithoutUserInputSchema
