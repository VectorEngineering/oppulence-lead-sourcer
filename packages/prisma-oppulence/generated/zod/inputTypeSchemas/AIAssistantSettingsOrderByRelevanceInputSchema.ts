import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AIAssistantSettingsOrderByRelevanceFieldEnumSchema } from './AIAssistantSettingsOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AIAssistantSettingsOrderByRelevanceInputSchema: z.ZodType<Prisma.AIAssistantSettingsOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AIAssistantSettingsOrderByRelevanceFieldEnumSchema),z.lazy(() => AIAssistantSettingsOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AIAssistantSettingsOrderByRelevanceInputSchema;
