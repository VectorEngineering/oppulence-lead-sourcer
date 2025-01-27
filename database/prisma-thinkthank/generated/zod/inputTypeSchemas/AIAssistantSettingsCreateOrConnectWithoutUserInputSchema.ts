import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AIAssistantSettingsWhereUniqueInputSchema } from './AIAssistantSettingsWhereUniqueInputSchema'
import { AIAssistantSettingsCreateWithoutUserInputSchema } from './AIAssistantSettingsCreateWithoutUserInputSchema'
import { AIAssistantSettingsUncheckedCreateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedCreateWithoutUserInputSchema'

export const AIAssistantSettingsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AIAssistantSettingsCreateOrConnectWithoutUserInput> =
    z
        .object({
            where: z.lazy(() => AIAssistantSettingsWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => AIAssistantSettingsCreateWithoutUserInputSchema),
                z.lazy(() => AIAssistantSettingsUncheckedCreateWithoutUserInputSchema)
            ])
        })
        .strict()

export default AIAssistantSettingsCreateOrConnectWithoutUserInputSchema
