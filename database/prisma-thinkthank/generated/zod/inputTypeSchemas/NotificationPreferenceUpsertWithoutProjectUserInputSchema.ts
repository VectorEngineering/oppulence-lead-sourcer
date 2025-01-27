import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NotificationPreferenceUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUpdateWithoutProjectUserInputSchema'
import { NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema'
import { NotificationPreferenceCreateWithoutProjectUserInputSchema } from './NotificationPreferenceCreateWithoutProjectUserInputSchema'
import { NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema'
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema'

export const NotificationPreferenceUpsertWithoutProjectUserInputSchema: z.ZodType<Prisma.NotificationPreferenceUpsertWithoutProjectUserInput> =
    z
        .object({
            update: z.union([
                z.lazy(() => NotificationPreferenceUpdateWithoutProjectUserInputSchema),
                z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema)
            ]),
            create: z.union([
                z.lazy(() => NotificationPreferenceCreateWithoutProjectUserInputSchema),
                z.lazy(() => NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema)
            ]),
            where: z.lazy(() => NotificationPreferenceWhereInputSchema).optional()
        })
        .strict()

export default NotificationPreferenceUpsertWithoutProjectUserInputSchema
