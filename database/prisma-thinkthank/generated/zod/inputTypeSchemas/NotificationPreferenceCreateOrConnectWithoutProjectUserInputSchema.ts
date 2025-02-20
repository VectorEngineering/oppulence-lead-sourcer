import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NotificationPreferenceWhereUniqueInputSchema } from './NotificationPreferenceWhereUniqueInputSchema'
import { NotificationPreferenceCreateWithoutProjectUserInputSchema } from './NotificationPreferenceCreateWithoutProjectUserInputSchema'
import { NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema'

export const NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema: z.ZodType<Prisma.NotificationPreferenceCreateOrConnectWithoutProjectUserInput> =
    z
        .object({
            where: z.lazy(() => NotificationPreferenceWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => NotificationPreferenceCreateWithoutProjectUserInputSchema),
                z.lazy(() => NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema)
            ])
        })
        .strict()

export default NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema
