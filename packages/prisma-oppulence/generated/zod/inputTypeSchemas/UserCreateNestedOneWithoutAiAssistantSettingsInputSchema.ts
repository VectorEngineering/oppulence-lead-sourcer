import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { UserCreateWithoutAiAssistantSettingsInputSchema } from './UserCreateWithoutAiAssistantSettingsInputSchema'
import { UserUncheckedCreateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedCreateWithoutAiAssistantSettingsInputSchema'
import { UserCreateOrConnectWithoutAiAssistantSettingsInputSchema } from './UserCreateOrConnectWithoutAiAssistantSettingsInputSchema'
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema'

export const UserCreateNestedOneWithoutAiAssistantSettingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAiAssistantSettingsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => UserCreateWithoutAiAssistantSettingsInputSchema),
                    z.lazy(() => UserUncheckedCreateWithoutAiAssistantSettingsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiAssistantSettingsInputSchema).optional(),
            connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
        })
        .strict()

export default UserCreateNestedOneWithoutAiAssistantSettingsInputSchema
