import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AIAssistantSettingsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AIAssistantSettingsAvgOrderByAggregateInput> = z.object({
  historyRetentionDays: z.lazy(() => SortOrderSchema).optional(),
  maxQuestionsPerDay: z.lazy(() => SortOrderSchema).optional(),
  contextWindow: z.lazy(() => SortOrderSchema).optional(),
  conversationCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AIAssistantSettingsAvgOrderByAggregateInputSchema;
