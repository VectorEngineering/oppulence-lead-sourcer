import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AIAssistantSettingsCreateManyInputSchema } from '../inputTypeSchemas/AIAssistantSettingsCreateManyInputSchema'

export const AIAssistantSettingsCreateManyArgsSchema: z.ZodType<Prisma.AIAssistantSettingsCreateManyArgs> = z.object({
  data: z.union([ AIAssistantSettingsCreateManyInputSchema,AIAssistantSettingsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AIAssistantSettingsCreateManyArgsSchema;
