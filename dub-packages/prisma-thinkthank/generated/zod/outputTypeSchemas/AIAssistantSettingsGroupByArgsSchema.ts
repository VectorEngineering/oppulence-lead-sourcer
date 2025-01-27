import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AIAssistantSettingsWhereInputSchema } from '../inputTypeSchemas/AIAssistantSettingsWhereInputSchema'
import { AIAssistantSettingsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AIAssistantSettingsOrderByWithAggregationInputSchema'
import { AIAssistantSettingsScalarFieldEnumSchema } from '../inputTypeSchemas/AIAssistantSettingsScalarFieldEnumSchema'
import { AIAssistantSettingsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AIAssistantSettingsScalarWhereWithAggregatesInputSchema'

export const AIAssistantSettingsGroupByArgsSchema: z.ZodType<Prisma.AIAssistantSettingsGroupByArgs> = z.object({
  where: AIAssistantSettingsWhereInputSchema.optional(),
  orderBy: z.union([ AIAssistantSettingsOrderByWithAggregationInputSchema.array(),AIAssistantSettingsOrderByWithAggregationInputSchema ]).optional(),
  by: AIAssistantSettingsScalarFieldEnumSchema.array(),
  having: AIAssistantSettingsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AIAssistantSettingsGroupByArgsSchema;
