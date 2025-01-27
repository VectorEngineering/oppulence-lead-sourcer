import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AutomationActionOrderByRelevanceFieldEnumSchema } from './AutomationActionOrderByRelevanceFieldEnumSchema';
import { SortOrderSchema } from './SortOrderSchema';

export const AutomationActionOrderByRelevanceInputSchema: z.ZodType<Prisma.AutomationActionOrderByRelevanceInput> = z.object({
  fields: z.union([ z.lazy(() => AutomationActionOrderByRelevanceFieldEnumSchema),z.lazy(() => AutomationActionOrderByRelevanceFieldEnumSchema).array() ]),
  sort: z.lazy(() => SortOrderSchema),
  search: z.string()
}).strict();

export default AutomationActionOrderByRelevanceInputSchema;
