import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserUpdateWithoutAiAssistantSettingsInputSchema } from './UserUpdateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema'
import { UserCreateWithoutAiAssistantSettingsInputSchema } from './UserCreateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedCreateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedCreateWithoutAiAssistantSettingsInputSchema'
import { UserWhereInputSchema } from './UserWhereInputSchema'

export const UserUpsertWithoutAiAssistantSettingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAiAssistantSettingsInput> = z
    .object({
        update: z.union([
            z.lazy(() => UserUpdateWithoutAiAssistantSettingsInputSchema),
            z.lazy(() => UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => UserCreateWithoutAiAssistantSettingsInputSchema),
            z.lazy(() => UserUncheckedCreateWithoutAiAssistantSettingsInputSchema)
        ]),
        where: z.lazy(() => UserWhereInputSchema).optional()
    })
    .strict()

export default UserUpsertWithoutAiAssistantSettingsInputSchema
