import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AIAssistantSettingsUpdateWithoutUserInputSchema } from './AIAssistantSettingsUpdateWithoutUserInputSchema'
import { AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema'
import { AIAssistantSettingsCreateWithoutUserInputSchema } from './AIAssistantSettingsCreateWithoutUserInputSchema'
import { AIAssistantSettingsUncheckedCreateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedCreateWithoutUserInputSchema'
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema'

export const AIAssistantSettingsUpsertWithoutUserInputSchema: z.ZodType<Prisma.AIAssistantSettingsUpsertWithoutUserInput> = z
    .object({
        update: z.union([
            z.lazy(() => AIAssistantSettingsUpdateWithoutUserInputSchema),
            z.lazy(() => AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema)
        ]),
        create: z.union([
            z.lazy(() => AIAssistantSettingsCreateWithoutUserInputSchema),
            z.lazy(() => AIAssistantSettingsUncheckedCreateWithoutUserInputSchema)
        ]),
        where: z.lazy(() => AIAssistantSettingsWhereInputSchema).optional()
    })
    .strict()

export default AIAssistantSettingsUpsertWithoutUserInputSchema
