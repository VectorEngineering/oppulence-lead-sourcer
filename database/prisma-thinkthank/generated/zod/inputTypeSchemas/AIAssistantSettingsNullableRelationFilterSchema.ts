import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema';

export const AIAssistantSettingsNullableRelationFilterSchema: z.ZodType<Prisma.AIAssistantSettingsNullableRelationFilter> = z.object({
  is: z.lazy(() => AIAssistantSettingsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AIAssistantSettingsWhereInputSchema).optional().nullable()
}).strict();

export default AIAssistantSettingsNullableRelationFilterSchema;
