import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AIAssistantSettingsWhereInputSchema } from '../inputTypeSchemas/AIAssistantSettingsWhereInputSchema'

export const AIAssistantSettingsDeleteManyArgsSchema: z.ZodType<Prisma.AIAssistantSettingsDeleteManyArgs> = z.object({
  where: AIAssistantSettingsWhereInputSchema.optional(),
}).strict() ;

export default AIAssistantSettingsDeleteManyArgsSchema;
