import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserWhereInputSchema } from './UserWhereInputSchema'
import { UserUpdateWithoutAiAssistantSettingsInputSchema } from './UserUpdateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema'

export const UserUpdateToOneWithWhereWithoutAiAssistantSettingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAiAssistantSettingsInput> =
    z
        .object({
            where: z.lazy(() => UserWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => UserUpdateWithoutAiAssistantSettingsInputSchema),
                z.lazy(() => UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema)
            ])
        })
        .strict()

export default UserUpdateToOneWithWhereWithoutAiAssistantSettingsInputSchema
