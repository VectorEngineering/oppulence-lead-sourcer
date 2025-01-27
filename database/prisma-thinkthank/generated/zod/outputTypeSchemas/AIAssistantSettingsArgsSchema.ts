import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AIAssistantSettingsSelectSchema } from '../inputTypeSchemas/AIAssistantSettingsSelectSchema'
import { AIAssistantSettingsIncludeSchema } from '../inputTypeSchemas/AIAssistantSettingsIncludeSchema'

export const AIAssistantSettingsArgsSchema: z.ZodType<Prisma.AIAssistantSettingsDefaultArgs> = z
    .object({
        select: z.lazy(() => AIAssistantSettingsSelectSchema).optional(),
        include: z.lazy(() => AIAssistantSettingsIncludeSchema).optional()
    })
    .strict()

export default AIAssistantSettingsArgsSchema
