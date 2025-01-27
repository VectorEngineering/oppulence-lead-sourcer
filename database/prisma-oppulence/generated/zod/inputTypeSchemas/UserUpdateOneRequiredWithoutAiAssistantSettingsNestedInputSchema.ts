import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutAiAssistantSettingsInputSchema } from './UserCreateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedCreateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedCreateWithoutAiAssistantSettingsInputSchema'
import { UserCreateOrConnectWithoutAiAssistantSettingsInputSchema } from './UserCreateOrConnectWithoutAiAssistantSettingsInputSchema'
import { UserUpsertWithoutAiAssistantSettingsInputSchema } from './UserUpsertWithoutAiAssistantSettingsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'
import { UserUpdateToOneWithWhereWithoutAiAssistantSettingsInputSchema } from './UserUpdateToOneWithWhereWithoutAiAssistantSettingsInputSchema'
import { UserUpdateWithoutAiAssistantSettingsInputSchema } from './UserUpdateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema'

export const UserUpdateOneRequiredWithoutAiAssistantSettingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAiAssistantSettingsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutAiAssistantSettingsInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutAiAssistantSettingsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiAssistantSettingsInputSchema).optional(),
            upsert: z.lazy(() => UserUpsertWithoutAiAssistantSettingsInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => UserUpdateToOneWithWhereWithoutAiAssistantSettingsInputSchema),
                    z.lazy(() => UserUpdateWithoutAiAssistantSettingsInputSchema),
                    z.lazy(() => UserUncheckedUpdateWithoutAiAssistantSettingsInputSchema)
                ])
                .optional()
        })
        .strict()

export default UserUpdateOneRequiredWithoutAiAssistantSettingsNestedInputSchema
