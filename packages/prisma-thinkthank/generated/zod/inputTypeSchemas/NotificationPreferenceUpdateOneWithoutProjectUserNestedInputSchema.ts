import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NotificationPreferenceCreateWithoutProjectUserInputSchema } from './NotificationPreferenceCreateWithoutProjectUserInputSchema'
import { NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema'
import { NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema } from './NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema'
import { NotificationPreferenceUpsertWithoutProjectUserInputSchema } from './NotificationPreferenceUpsertWithoutProjectUserInputSchema'
import { NotificationPreferenceWhereInputSchema } from './NotificationPreferenceWhereInputSchema'
import { NotificationPreferenceWhereUniqueInputSchema } from './NotificationPreferenceWhereUniqueInputSchema'
import { NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInputSchema } from './NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInputSchema'
import { NotificationPreferenceUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUpdateWithoutProjectUserInputSchema'
import { NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema } from './NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema'

export const NotificationPreferenceUpdateOneWithoutProjectUserNestedInputSchema: z.ZodType<Prisma.NotificationPreferenceUpdateOneWithoutProjectUserNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => NotificationPreferenceCreateWithoutProjectUserInputSchema),
                    z.lazy(() => NotificationPreferenceUncheckedCreateWithoutProjectUserInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => NotificationPreferenceCreateOrConnectWithoutProjectUserInputSchema).optional(),
            upsert: z.lazy(() => NotificationPreferenceUpsertWithoutProjectUserInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => NotificationPreferenceWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => NotificationPreferenceWhereInputSchema)]).optional(),
            connect: z.lazy(() => NotificationPreferenceWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => NotificationPreferenceUpdateToOneWithWhereWithoutProjectUserInputSchema),
                    z.lazy(() => NotificationPreferenceUpdateWithoutProjectUserInputSchema),
                    z.lazy(() => NotificationPreferenceUncheckedUpdateWithoutProjectUserInputSchema)
                ])
                .optional()
        })
        .strict()

export default NotificationPreferenceUpdateOneWithoutProjectUserNestedInputSchema
