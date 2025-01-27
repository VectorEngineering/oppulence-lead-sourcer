import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AIAssistantSettingsUpdateManyMutationInputSchema } from '../inputTypeSchemas/AIAssistantSettingsUpdateManyMutationInputSchema'
import { AIAssistantSettingsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AIAssistantSettingsUncheckedUpdateManyInputSchema'
import { AIAssistantSettingsWhereInputSchema } from '../inputTypeSchemas/AIAssistantSettingsWhereInputSchema'

export const AIAssistantSettingsUpdateManyArgsSchema: z.ZodType<Prisma.AIAssistantSettingsUpdateManyArgs> = z
    .object({
        data: z.union([AIAssistantSettingsUpdateManyMutationInputSchema, AIAssistantSettingsUncheckedUpdateManyInputSchema]),
        where: AIAssistantSettingsWhereInputSchema.optional()
    })
    .strict()

export default AIAssistantSettingsUpdateManyArgsSchema
