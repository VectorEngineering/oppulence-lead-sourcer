import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppWhereUniqueInputSchema } from './AppWhereUniqueInputSchema'
import { AppCreateWithoutUserInputSchema } from './AppCreateWithoutUserInputSchema'
import { AppUncheckedCreateWithoutUserInputSchema } from './AppUncheckedCreateWithoutUserInputSchema'

export const AppCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AppCreateOrConnectWithoutUserInput> = z
    .object({
        where: z.lazy(() => AppWhereUniqueInputSchema),
        create: z.union([z.lazy(() => AppCreateWithoutUserInputSchema), z.lazy(() => AppUncheckedCreateWithoutUserInputSchema)])
    })
    .strict()

export default AppCreateOrConnectWithoutUserInputSchema
