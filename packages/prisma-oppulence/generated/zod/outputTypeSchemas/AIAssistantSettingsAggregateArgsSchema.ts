import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AIAssistantSettingsWhereInputSchema } from '../inputTypeSchemas/AIAssistantSettingsWhereInputSchema'
import { AIAssistantSettingsOrderByWithRelationInputSchema } from '../inputTypeSchemas/AIAssistantSettingsOrderByWithRelationInputSchema'
import { AIAssistantSettingsWhereUniqueInputSchema } from '../inputTypeSchemas/AIAssistantSettingsWhereUniqueInputSchema'

export const AIAssistantSettingsAggregateArgsSchema: z.ZodType<Prisma.AIAssistantSettingsAggregateArgs> = z
    .object({
        where: AIAssistantSettingsWhereInputSchema.optional(),
        orderBy: z
            .union([AIAssistantSettingsOrderByWithRelationInputSchema.array(), AIAssistantSettingsOrderByWithRelationInputSchema])
            .optional(),
        cursor: AIAssistantSettingsWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default AIAssistantSettingsAggregateArgsSchema
